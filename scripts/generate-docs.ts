import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const manualTitle = "# Webstudio MCP Manual";
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const outputPath = resolve(
  fileURLToPath(new URL("..", import.meta.url)),
  "docs/university/mcp.md"
);

const run = (command: string, args: string[]) =>
  execFileSync(command, args, {
    encoding: "utf8",
    env: {
      ...process.env,
      CI: "1",
      FORCE_COLOR: "0",
      NO_COLOR: "1",
    },
    maxBuffer: 10 * 1024 * 1024,
  }).trim();

const getLatestCliVersion = () =>
  run(npmCommand, ["view", "webstudio@latest", "version"]);

const getMcpManual = (version: string) =>
  run(pnpmCommand, [
    "dlx",
    `webstudio@${version}`,
    "man",
    "mcp",
    "--verbose",
  ]);

export const renderMcpDocumentation = ({
  manual,
  version,
}: {
  manual: string;
  version: string;
}) => {
  const normalizedManual = manual.replaceAll("\r\n", "\n").trim();
  if (normalizedManual.startsWith(`${manualTitle}\n`) === false) {
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

<!-- Generated from Webstudio CLI v${version} with \`webstudio man mcp --verbose\`. Do not edit directly. -->

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

export const generateDocs = () => {
  const version = getLatestCliVersion();
  const manual = getMcpManual(version);
  writeFileSync(
    outputPath,
    renderMcpDocumentation({ manual, version }),
    "utf8"
  );
  return version;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  process.stdout.write(`${generateDocs()}\n`);
}
