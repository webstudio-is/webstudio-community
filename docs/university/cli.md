---
description: >-
  Webstudio's Command Line Interface (CLI) allows you to interact directly with
  your Projects from the command line.
---

# ⬛ CLI

Webstudio's CLI lets you work with Projects from the command line. You can export and build a Project, publish and manage domains, inspect Project permissions, capture screenshots, and expose the configured Project to automation tools through MCP.

For self-hosting, the CLI can export your entire Webstudio Project. Once exported, these projects are ready to be deployed on any hosting platform of your choice - giving you complete freedom over where and how your website goes live.

## Quick setup

The current Webstudio CLI package is `webstudio`, and the command is `webstudio`. Do not use the old `@webstudio-is/cli` package or the old `wstd` command.

First, check whether Node.js and npm are already installed:

```sh
node --version
npm --version
```

If `node` is version 22 or greater and `npm` prints a version, skip Node.js installation.

Run the latest Webstudio CLI without a global install:

```bash
npx --yes webstudio@latest --version
```

No separate Webstudio CLI installation is required when using `npx`. After verifying the latest CLI with `npx --yes webstudio@latest`, you can use the shorter `npx webstudio` command in the same environment.

If the `webstudio` command already exists, you can check it:

```sh
webstudio --version
```

For the latest version regardless of any existing global install, use `npx --yes webstudio@latest`.

## How to run Webstudio commands

Examples on this page use the no-install `npx webstudio` command:

```bash
npx webstudio <command> [options]
```

Use one of these command formats:

| Setup | Command format |
| ----- | -------------- |
| Latest one-off run, all OSs | `npx --yes webstudio@latest <command> [options]` |
| After verifying latest | `npx webstudio <command> [options]` |
| Existing global install | `webstudio <command> [options]` |

Running with `npx` does not install a permanent `webstudio` command. Use `webstudio` only when it already exists on your PATH, for example after a global install.

Use `npx webstudio --help` for the current command list.

## First use

To use the CLI with a Project, you need an existing Webstudio Project and a Builder share link with Build access. Create the share link from the Share dialog in the Builder.

Run the guided flow:

```bash
npx webstudio
```

Or link a Project non-interactively:

```bash
npx webstudio link --link "<share-link-with-build-access>"
```

Publish the Project in Webstudio Cloud before syncing when you need recent Builder changes in the local export.

## Install Node.js only when needed

You need Node.js 22 or greater to use the Webstudio CLI. If `node --version` reports version 22 or greater, skip this section.

On macOS or Linux, you can install Node.js with NVM. First check whether NVM already exists:

```sh
command -v nvm
```

If `nvm` is not found, install it:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

After installing NVM, restart your terminal. If `nvm` is still not found, source your shell profile and try again.

Once NVM is installed, you can install Node.js version 22 or greater by running:

```sh
nvm install 22
```

Verify your Node.js installation by checking its version:

```sh
node --version
```

On Windows, install Node.js 22 or greater from [nodejs.org](https://nodejs.org/) or use a Windows-compatible Node version manager. After installing Node.js, open a new terminal and verify:

```powershell
node --version
npm --version
```

## How the CLI connects to a Project

Most CLI commands operate on the single Project configured in the current directory.

- `.webstudio/config.json` stores the Project ID.
- The global Webstudio config stores the origin and share-link token.
- `npx webstudio sync` downloads the Project bundle to `.webstudio/data.json`.
- Synced asset files are stored in `.webstudio/assets`.

You can configure a Project interactively:

```bash
npx webstudio link
```

Or pass a share link directly:

```bash
npx webstudio link --link "<share-link>"
```

For automation, use `init` with JSON output:

```bash
npx webstudio init --link "<share-link>" --json
```

The share link should include Build access when you need to sync, build, import, or automate Project changes.

## Commands

Use `npx webstudio --help` for the current command list.

| Command      | Use                                                            |
| ------------ | -------------------------------------------------------------- |
| `init`       | Create or link a local Webstudio Project setup                 |
| `link`       | Link the current directory to a Builder share link             |
| `sync`       | Download the configured Project bundle and assets              |
| `import`     | Import the synced bundle into another Project                  |
| `build`      | Build the synced Project with a selected template              |
| `preview`    | Regenerate files and run the generated app dev server          |
| `screenshot` | Capture a PNG screenshot of a URL                              |
| `permissions`| Show API, role, publish, and domain capabilities               |
| `publish`    | Publish, list publish jobs, check status, and unpublish        |
| `domains`    | List, create, update, delete, and verify custom domains        |
| `man`        | Print long-form CLI, API, LLM, and MCP manuals                 |
| `schema`     | Print machine-readable command and patch schemas               |
| `mcp`        | Run an MCP server over stdio for the configured Project        |

Global installation is optional. If you choose to install globally, install or update with:

```bash
npm install -g webstudio@latest
```

## Sync and build

After linking, publish the Project in Webstudio Cloud, then sync it locally:

```bash
npx webstudio sync
```

Build a dynamic app with one of the deployment templates:

```bash
npx webstudio build --template docker
```

{% hint style="info" %}
See [export types](self-hosting/#export-types) for more information about JavaScript applications vs. static sites.
{% endhint %}

During this phase, the CLI establishes the necessary routes and pages, scaffolding the application using the selected React Router template. Assets such as images and fonts are downloaded to the `assets` folder inside `public`.

Once the project is scaffolded, run `npm install` and then `npm run dev` to run your app in development mode. To build a production version, run `npm run build`.

Build a static site with:

```bash
npx webstudio build --template ssg
```

Please review [the limitations](self-hosting/#ssg-limitations) of using the static site export instead of dynamic templates.

## Import into another Project

Use `import` to transfer the synced Project bundle into another Webstudio Project:

```bash
npx webstudio import --to "<destination-share-link>"
```

Run `npx webstudio sync` before importing. The command reads `.webstudio/data.json` and imports it into the destination Project. The destination share link must include Build access. If you omit `--to` in an interactive terminal, the CLI prompts you to paste the destination share link.

By default, the CLI reads referenced asset files from `.webstudio/assets`, uploads them to the destination Project, and imports the asset records. Use `--assets-dir` when the asset files are somewhere else:

```bash
npx webstudio import --to "<destination-share-link>" --assets-dir "./path/to/assets"
```

To import Project data without asset files or asset records, use:

```bash
npx webstudio import --to "<destination-share-link>" --skip-assets
```

If the synced bundle version does not match the destination API version, the CLI stops before importing. Use `--ignore-version-check` only when you know the source and target data formats are compatible.

## Preview and screenshot

Run the generated app locally:

```bash
npx webstudio preview --template ssg --port 5173
```

The preview command uses `.webstudio/data.json`, so run `npx webstudio sync` first. It does not install dependencies for the generated app. For a fresh checkout or newly generated app, run `npm install` or `pnpm install` before previewing.

Capture a screenshot with an installed Chromium-family browser:

```bash
npx webstudio screenshot "http://127.0.0.1:5173" --output current.png --width 1440 --height 900
```

## Publish and domains

These commands operate on the configured Project and return JSON. Check the configured token's capabilities first:

```bash
npx webstudio permissions --json
```

Publish, inspect publish jobs, and unpublish:

```bash
npx webstudio publish deploy --target production --json
npx webstudio publish list --json
npx webstudio publish status --job <build-id> --json
npx webstudio publish unpublish --target production --confirm --json
```

List and manage custom domains:

```bash
npx webstudio domains list --json
npx webstudio domains create --domain example.com --json
npx webstudio domains verify --domain-id <domain-id> --json
npx webstudio domains delete --domain-id <domain-id> --confirm --json
```

Use `--confirm` only for destructive commands the user explicitly wants to run, such as unpublish, domain deletion, or replacement.

## API, manuals, and MCP

The CLI includes built-in manuals and machine-readable schemas:

```bash
npx webstudio man api
npx webstudio man llm --json
npx webstudio man mcp
npx webstudio schema api --json
```

API commands follow these rules:

- They operate on the configured Project only; do not pass a Project ID.
- Use `--json`; successful responses are JSON on stdout, while diagnostics go to stderr.
- Read IDs before writing. Do not invent IDs for existing pages, domains, assets, or other records.
- Use `--refresh` before local-capable commands when cached Project data may be stale.

For detailed Project editing and automation, start the MCP server:

```bash
npx webstudio mcp
```

After startup, MCP clients can discover capabilities with `tools/list`, `resources/list`, `meta.index`, `meta.guide`, and `meta.get_more_tools`.

Useful MCP resources include:

- `webstudio://project/status`
- `webstudio://project/tools`
- `webstudio://project/guide`

Prefer semantic MCP tools for Project edits. Use raw `apply-patch` only when no semantic tool exists, and read the latest snapshot before writing.

## Related

- [Download](self-hosting/download.md) – Export a static site directly from the Builder
- [Netlify](self-hosting/netlify.md) – Deploy your project to Netlify
- [Vercel](self-hosting/vercel.md) – Deploy your project to Vercel
- [VPS with Docker](self-hosting/vps-with-docker.md) – Deploy to your own server using Docker
- [Publishing and custom domains](foundations/publishing-and-custom-domains.md) – Set up custom domains for your site
