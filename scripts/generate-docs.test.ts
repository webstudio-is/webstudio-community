import assert from "node:assert/strict";
import test from "node:test";
import {
  renderMcpDocumentation,
  resolveCliVersion,
} from "./generate-docs.js";

test("uses an exact dispatched CLI version", () => {
  const requestedSpecifiers: string[] = [];
  const version = resolveCliVersion({
    requestedVersion: "0.285.0",
    getPublishedVersion: (specifier) => {
      requestedSpecifiers.push(specifier);
      return "0.285.0";
    },
  });

  assert.equal(version, "0.285.0");
  assert.deepEqual(requestedSpecifiers, ["0.285.0"]);
});

test("resolves latest when no CLI version is dispatched", () => {
  const requestedSpecifiers: string[] = [];
  const version = resolveCliVersion({
    requestedVersion: undefined,
    getPublishedVersion: (specifier) => {
      requestedSpecifiers.push(specifier);
      return "0.285.0";
    },
  });

  assert.equal(version, "0.285.0");
  assert.deepEqual(requestedSpecifiers, ["latest"]);
});

test("rejects a dispatched CLI version that is not exact", () => {
  assert.throws(
    () =>
      resolveCliVersion({
        requestedVersion: "latest",
        getPublishedVersion: () => "0.285.0",
      }),
    /must resolve exactly/
  );
});

test("renders GitBook metadata around the complete CLI manual", () => {
  const generated = renderMcpDocumentation({
    manual: "# Webstudio MCP Manual\n\n## Startup\n\nStart here.\n",
    version: "0.284.0",
  });

  assert.match(generated, /^---\n/);
  assert.match(generated, /# Webstudio MCP\n/);
  assert.match(generated, /Webstudio CLI \*\*v0\.284\.0\*\*/);
  assert.match(generated, /It documents\nthat published CLI release\./);
  assert.match(generated, /See \[CLI\]\(cli\.md\) for Node\.js and `npx` setup/);
  assert.match(generated, /## Startup\n\nStart here\./);
  assert.match(generated, /## Related\n/);
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
