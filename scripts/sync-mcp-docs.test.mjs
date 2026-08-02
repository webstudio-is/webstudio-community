import assert from "node:assert/strict";
import test from "node:test";
import {
  extractGeneratedVersion,
  parseOptions,
  renderMcpDocumentation,
} from "./sync-mcp-docs.mjs";

test("renders GitBook metadata around the complete CLI manual", () => {
  const generated = renderMcpDocumentation({
    manual: "# Webstudio MCP Manual\n\n## Startup\n\nStart here.\n",
    version: "0.284.0",
  });

  assert.match(generated, /^---\n/);
  assert.match(generated, /# Webstudio MCP\n/);
  assert.match(generated, /Webstudio CLI \*\*v0\.284\.0\*\*/);
  assert.match(generated, /See \[CLI\]\(cli\.md\) for Node\.js and `npx` setup/);
  assert.match(generated, /## Startup\n\nStart here\./);
  assert.match(generated, /## Related\n/);
  assert.equal(extractGeneratedVersion(generated), "0.284.0");
  assert.equal(generated.includes("# Webstudio MCP Manual"), false);
});

test("rejects an unexpected CLI manual", () => {
  assert.throws(
    () =>
      renderMcpDocumentation({
        manual: "# Different manual",
        version: "0.284.0",
      }),
    /Expected the CLI manual/
  );
});

test("parses update, check, and local CLI options", () => {
  assert.deepEqual(parseOptions(["--latest"]), {
    check: false,
    latest: true,
    printRecordedVersion: false,
    cliPath: undefined,
    version: undefined,
  });
  assert.deepEqual(
    parseOptions(["--cli", "../webstudio/packages/cli/local.js", "--version", "0.285.0"]),
    {
      check: false,
      latest: false,
      printRecordedVersion: false,
      cliPath: "../webstudio/packages/cli/local.js",
      version: "0.285.0",
    }
  );
  assert.throws(
    () => parseOptions(["--latest", "--check"]),
    /Choose only one/
  );
});
