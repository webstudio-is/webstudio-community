---
description: >-
  Connect AI agents and automation to a Webstudio Project through MCP or direct
  CLI tool calls.
icon: robot
---

# Webstudio MCP

Webstudio MCP lets AI agents inspect and edit the native visual-builder model.
Changes remain editable in the Builder and can reuse Webstudio components,
styles, breakpoints, design tokens, variables, resources, assets, and page
settings.

Use MCP when you want an agent to work on an existing Project, build pages and
sections, update content or styles, run audits, verify rendered results, or
publish through the same Webstudio workflow.

## Before you start

You need:

- Node.js 22 or greater.
- An existing Webstudio Project.
- A share link with **Build** access.
- A local folder for the linked Project.

See [CLI](cli.md) for Node.js and `npx` setup details.

## Link a Project

Open the local folder you want to associate with the Project, then run:

```bash
npx webstudio link --link "<share-link-with-build-access>"
```

The link stores the Project ID locally and the share-link credential in the
global Webstudio configuration. MCP works with the latest editable Builder
build. You do not need to publish or run `sync` before editing through MCP.

{% hint style="warning" %}
Treat a share link like a credential. Do not put it in source control, prompts,
screenshots, logs, or issue reports.
{% endhint %}

## Call MCP tools directly from the CLI

Shell-capable agents can call MCP tools as ordinary CLI subcommands. This is the
fastest way to start because it does not require MCP client configuration or a
client restart.

Begin with the compact capability index:

```bash
npx webstudio meta.index
npx webstudio components.search '{"brief":"button"}'
```

Ask for a workflow or an exact tool contract:

```bash
npx webstudio meta.guide '{"brief":"Create a pricing page"}'
npx webstudio meta.get_more_tools '{"tools":["insert-fragment"]}'
```

Call a project tool with a JSON argument object:

```bash
npx webstudio components.get '{"component":"Button"}'
npx webstudio insert-fragment '{"parentInstanceId":"<parent-id>","fragment":"<ws.element ws:tag=\"section\" />"}' --dry-run
```

The explicit equivalent is:

```bash
npx webstudio mcp single-op-call <tool> '<json>'
```

For example:

```bash
npx webstudio mcp single-op-call inspect-instance '{"instanceId":"<instance-id>","include":["props"]}'
```

Both forms print structured JSON. The shortcut starts the current CLI for that
call, so it sees the current tool catalog without reconnecting a persistent MCP
client. If a tool name conflicts with a top-level CLI command, use the explicit
`mcp single-op-call` form.

## Connect an MCP client

Use native MCP setup when you want tools to remain available inside a supported
AI client:

```bash
npx webstudio connect claude
npx webstudio connect codex
npx webstudio connect cursor
npx webstudio connect vscode
```

Run the command from the linked Project folder. Add `--print` to preview
file-based configuration without changing it.

The command preserves unrelated client settings and creates or updates only the
`webstudio` MCP entry. A persistent client may need to reconnect or restart
after its MCP configuration or cached tool catalog changes. Direct CLI tool
calls do not have that requirement.

For manual client configuration, start the stdio server with:

```bash
npx webstudio mcp
```

Do not type or pipe raw JSON-RPC frames into this command from an interactive
shell. Use direct tool shortcuts, `mcp single-op-call`, or a real MCP client.

## Choose a command mode

| Need                           | Command                                            | Notes                                                        |
| ------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ |
| One unambiguous tool call      | `npx webstudio <tool> '<json>'`                    | No MCP client setup or restart                               |
| Explicit one-shot MCP call     | `npx webstudio mcp single-op-call <tool> '<json>'` | Same structured result as the shortcut                       |
| Several calls in one process   | `npx webstudio mcp run '<calls-json>'`             | Shares one CLI session and supports long-lived preview tools |
| Native tools in an AI client   | `npx webstudio connect <client>`                   | The client may need to reconnect after configuration changes |
| Manually configured MCP client | `npx webstudio mcp`                                | Long-running stdio server                                    |

Use `mcp run` when several calls need the same live process. For example:

```bash
npx webstudio mcp run '[{"tool":"meta.index"},{"tool":"components.search","input":{"brief":"button"}}]'
```

Pass a normal JSON file path to `mcp run` for a large call manifest. Use
`--input-file` when one tool call has a large argument object.

## Discover tools

Start with focused discovery instead of loading the complete catalog:

- `meta.index` returns the compact capability index.
- `meta.guide` returns a workflow for a goal.
- `meta.get_more_tools` returns exact schemas and examples for named tools.
- `components.search` finds components and templates.
- `components.get` returns the complete contract for one component.
- `templates.get` returns one insertion template.

From an MCP client, `tools/list` and `resources/list` provide protocol-level
discovery. The server also exposes focused resources such as
`webstudio://project/guide` and `webstudio://project/expressions`.

## Inspect instances and attributes

`list-instances` returns compact tree summaries. Use `rootInstanceId` when you
want to list one instance subtree:

```bash
npx webstudio mcp single-op-call list-instances '{"rootInstanceId":"<instance-id>","maxDepth":2}'
```

Use `inspect-instance` for one element. It returns props, including authored
classes and custom attributes, by default. Request larger details with
`include`:

```bash
npx webstudio mcp single-op-call inspect-instance '{"instanceId":"<instance-id>","include":["props","styles","bindings","sources","children","ancestors"]}'
```

Including `props` explicitly is optional and useful only when constructing a
shared `include` list. Styles, bindings, sources, children, and ancestors remain
opt-in so routine inspection calls stay focused.

## Edit text

Use `update-text` to replace an existing text or expression child:

```bash
npx webstudio mcp single-op-call update-text '{"instanceId":"<instance-id>","childIndex":0,"text":"Launch faster","mode":"text"}'
```

Use `set-text-content` to replace all text content on an instance or reset it:

```bash
npx webstudio mcp single-op-call set-text-content '{"operation":"set","instanceId":"<instance-id>","text":"Launch faster"}'
npx webstudio mcp single-op-call set-text-content '{"operation":"reset","instanceId":"<instance-id>"}'
```

For dynamic expression text, read `webstudio://project/expressions` and use
`"mode":"expression"`.

## Make and verify changes

Prefer semantic tools such as `insert-fragment`, `move-instance`, `update-text`,
`update-props`, and `update-styles` over raw patches. Read existing IDs and
design conventions before changing the Project.

Use `--dry-run` for a mutation when you want to review its transaction without
committing:

```bash
npx webstudio insert-fragment '{"parentInstanceId":"<parent-id>","fragment":"<ws.element ws:tag=\"section\" />"}' --dry-run
```

After visual changes, use the MCP preview and screenshot tools to inspect the
generated page. Long-lived preview tools must run in one `mcp run` process or a
persistent MCP client.

## Restore points and destructive changes

Before a large edit, create a named restore point for versioned Build data:

```bash
npx webstudio create-restore-point '{"name":"Before pricing redesign"}'
```

Assets are not included in restore points. Reverting, deleting, replacing, and
other destructive operations require a reviewed dry run and explicit
confirmation tied to that plan.

## Troubleshooting

- Run `npx --yes webstudio@latest --version` to verify the current release.
- Run `npx webstudio meta.index` to confirm the linked Project is reachable.
- Use `meta.get_more_tools` when a tool's required fields are unclear.
- Use `rootInstanceId` with `list-instances`; use `instanceId` with
  `inspect-instance`.
- Run one-shot mutations sequentially. Retry after a short wait if another
  process returns `PROJECT_SESSION_BUSY`.
- Redact share links, tokens, private URLs, cookies, and Project data from issue
  reports.

## Related

- [CLI](cli.md) – Install and use the Webstudio command-line interface
- [Commands and search](foundations/commands-and-search.md) – Run Builder commands from the keyboard
- [Shortcuts](foundations/shortcuts.md) – Reorder and edit instances without drag-and-drop
- [Share links](foundations/share-links.md) – Grant the access used to link a Project
- [Publishing and custom domains](foundations/publishing-and-custom-domains.md) – Publish the completed Project
