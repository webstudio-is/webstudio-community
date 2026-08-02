import { spawnSync } from "node:child_process";
import {
  existsSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outputPath = resolve(
  fileURLToPath(new URL("..", import.meta.url)),
  "docs/university/mcp.md"
);
const generatedSourcePrefix = "<!-- Generated from Webstudio CLI v";
const generatedSourceSuffix =
  " with `webstudio man mcp --verbose`. Do not edit directly. -->";
const manualTitle = "# Webstudio MCP Manual";
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const npxCommand = process.platform === "win32" ? "npx.cmd" : "npx";

const usage = `Usage:
  node scripts/sync-mcp-docs.mjs --latest
  node scripts/sync-mcp-docs.mjs --version <version>
  node scripts/sync-mcp-docs.mjs --cli <path> [--version <version>]
  node scripts/sync-mcp-docs.mjs --check
  node scripts/sync-mcp-docs.mjs --print-recorded-version`;

export const parseOptions = (args) => {
  const options = {
    check: false,
    latest: false,
    printRecordedVersion: false,
    cliPath: undefined,
    version: undefined,
  };
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--check") {
      options.check = true;
      continue;
    }
    if (argument === "--latest") {
      options.latest = true;
      continue;
    }
    if (argument === "--print-recorded-version") {
      options.printRecordedVersion = true;
      continue;
    }
    if (argument === "--cli" || argument === "--version") {
      const value = args[index + 1];
      if (value === undefined || value.startsWith("--")) {
        throw new Error(`${argument} requires a value.\n\n${usage}`);
      }
      if (argument === "--cli") {
        options.cliPath = value;
      } else {
        options.version = value;
      }
      index += 1;
      continue;
    }
    throw new Error(`Unknown argument: ${argument}\n\n${usage}`);
  }
  const selectedModes = [
    options.check,
    options.printRecordedVersion,
    options.latest,
    options.cliPath !== undefined,
  ].filter(Boolean).length;
  if (selectedModes > 1) {
    throw new Error(
      "Choose only one of --check, --print-recorded-version, --latest, or --cli."
    );
  }
  if (
    options.version !== undefined &&
    (options.check || options.printRecordedVersion || options.latest)
  ) {
    throw new Error(
      "--version can be used alone or with --cli, but not with the selected mode."
    );
  }
  return options;
};

const validateVersion = (version) => {
  if (
    /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(
      version
    ) === false
  ) {
    throw new Error(`Unexpected Webstudio CLI version: ${version}`);
  }
  return version;
};

export const extractGeneratedVersion = (markdown) => {
  const sourceLine = markdown
    .split("\n")
    .find(
      (line) =>
        line.startsWith(generatedSourcePrefix) &&
        line.endsWith(generatedSourceSuffix)
    );
  if (sourceLine === undefined) {
    throw new Error("The generated MCP documentation has no source version.");
  }
  return validateVersion(
    sourceLine.slice(
      generatedSourcePrefix.length,
      -generatedSourceSuffix.length
    )
  );
};

export const renderMcpDocumentation = ({ manual, version }) => {
  validateVersion(version);
  const normalizedManual = manual.replaceAll("\r\n", "\n").trim();
  if (
    normalizedManual !== manualTitle &&
    normalizedManual.startsWith(`${manualTitle}\n`) === false
  ) {
    throw new Error(
      `Expected the CLI manual to begin with ${JSON.stringify(manualTitle)}.`
    );
  }
  const manualBody = normalizedManual.slice(manualTitle.length).trimStart();
  return `---
description: >-
  Connect AI agents and automation to a Webstudio Project through MCP or direct
  CLI tool calls.
icon: robot
---

${generatedSourcePrefix}${version}${generatedSourceSuffix}

# Webstudio MCP

{% hint style="info" %}
This reference was generated from Webstudio CLI **v${version}**. It documents
the latest published CLI available when this page was generated. Examples use
an installed \`webstudio\` command. See [CLI](cli.md) for Node.js and \`npx\` setup.
{% endhint %}

${manualBody}

## Related

- [CLI](cli.md) – Install and use the Webstudio command-line interface
- [Commands and search](foundations/commands-and-search.md) – Run Builder commands from the keyboard
- [Shortcuts](foundations/shortcuts.md) – Reorder and edit instances without drag-and-drop
- [Share links](foundations/share-links.md) – Grant the access used to link a Project
- [Publishing and custom domains](foundations/publishing-and-custom-domains.md) – Publish the completed Project
`;
};

const runCommand = (command, args) => {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    env: {
      ...process.env,
      CI: "1",
      FORCE_COLOR: "0",
      NO_COLOR: "1",
    },
    maxBuffer: 10 * 1024 * 1024,
  });
  if (result.error !== undefined) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(
      [`Command failed: ${command} ${args.join(" ")}`, result.stderr]
        .filter(Boolean)
        .join("\n")
    );
  }
  return result.stdout.trim();
};

const resolveLatestVersion = () =>
  validateVersion(
    runCommand(npmCommand, ["view", "webstudio@latest", "version"])
  );

const readPublishedManual = (version) =>
  runCommand(npxCommand, [
    "--yes",
    `webstudio@${version}`,
    "man",
    "mcp",
    "--verbose",
  ]);

const readLocalManual = ({ cliPath, version }) => {
  const absoluteCliPath = resolve(cliPath);
  const resolvedVersion = validateVersion(
    version ?? runCommand(process.execPath, [absoluteCliPath, "--version"])
  );
  return {
    manual: runCommand(process.execPath, [
      absoluteCliPath,
      "man",
      "mcp",
      "--verbose",
    ]),
    version: resolvedVersion,
  };
};

const writeAtomically = (path, contents) => {
  const temporaryPath = `${path}.tmp`;
  try {
    writeFileSync(temporaryPath, contents, "utf8");
    renameSync(temporaryPath, path);
  } finally {
    if (existsSync(temporaryPath)) {
      unlinkSync(temporaryPath);
    }
  }
};

export const main = (args = process.argv.slice(2)) => {
  const options = parseOptions(args);
  const current = existsSync(outputPath)
    ? readFileSync(outputPath, "utf8")
    : "";
  if (options.printRecordedVersion) {
    process.stdout.write(`${extractGeneratedVersion(current)}\n`);
    return;
  }

  let version;
  let manual;
  if (options.check) {
    version = extractGeneratedVersion(current);
    manual = readPublishedManual(version);
  } else if (options.cliPath !== undefined) {
    ({ manual, version } = readLocalManual({
      cliPath: options.cliPath,
      version: options.version,
    }));
  } else {
    version = options.version ?? resolveLatestVersion();
    manual = readPublishedManual(validateVersion(version));
  }

  const generated = renderMcpDocumentation({ manual, version });
  if (options.check) {
    if (generated !== current) {
      throw new Error(
        `MCP documentation is stale for Webstudio CLI v${version}. Run npm run docs:sync:mcp.`
      );
    }
    process.stdout.write(
      `MCP documentation matches Webstudio CLI v${version}.\n`
    );
    return;
  }
  if (generated === current) {
    process.stdout.write(
      `MCP documentation is already current for Webstudio CLI v${version}.\n`
    );
    return;
  }
  writeAtomically(outputPath, generated);
  process.stdout.write(
    `Generated docs/university/mcp.md from Webstudio CLI v${version}.\n`
  );
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
