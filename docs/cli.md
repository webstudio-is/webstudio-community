---
description: >-
  Webstudio's Command Line Interface (CLI) allows you to interact directly with
  your Projects from the command line.
---

# ⬛ CLI

Webstudio's CLI lets you work with Projects from the command line. You can export and build a Project, publish and manage domains, inspect Project permissions, capture screenshots, and expose the configured Project to automation tools through MCP.

For self-hosting, the CLI can export your entire Webstudio Project. Once exported, these projects are ready to be deployed on any hosting platform of your choice - giving you complete freedom over where and how your website goes live.

## Prerequisites: Installing Node.js

You need Node.js to use the Webstudio CLI. If Node.js is already installed in your system, you can skip ahead to the section on installing the Webstudio CLI.

To install Node.js using NVM, first install NVM by running:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Once NVM is installed, you can install Node.js version 22 or greater by running:

```bash
nvm install 22
```

Verify your Node.js installation by checking its version:

```bash
node --version
```

## Installing the Webstudio CLI

To get started with the Webstudio CLI:

1.  Download and install the CLI using the following command:

    ```bash
    npm install -g webstudio
    ```

2.  Confirm the installation by checking the CLI version:

    ```bash
    webstudio --version
    ```

3.  To keep your CLI updated, use the same command used for installation whenever a new release is available.

## Quick start

Run the CLI without a command to start the guided setup flow:

```bash
webstudio
```

This connects a Webstudio Cloud Project, syncs it, builds it locally, and optionally installs dependencies. You can also run each step yourself.

```bash
webstudio link
webstudio sync
webstudio build --template docker
```

For a static export, use:

```bash
webstudio build --template ssg
```

{% hint style="info" %}
See [export types](university/self-hosting/#export-types) for more information about JavaScript applications vs. static sites.
{% endhint %}

## How the CLI connects to a Project

Most CLI commands operate on the single Project configured in the current directory.

- `.webstudio/config.json` stores the Project ID.
- The global Webstudio config stores the origin and share-link token.
- `webstudio sync` downloads the Project bundle to `.webstudio/data.json`.
- Synced asset files are stored in `.webstudio/assets`.

You can configure a Project interactively:

```bash
webstudio link
```

Or pass a share link directly:

```bash
webstudio link --link "<share-link>"
```

For automation, use `init` with JSON output:

```bash
webstudio init --link "<share-link>" --json
```

The share link should include Build access when you need to sync, build, import, or automate Project changes.

## Commands

Use `webstudio --help` for the current command list.

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

## Sync and build

After linking, publish the Project in Webstudio Cloud, then sync it locally:

```bash
webstudio sync
```

Build a dynamic app with one of the deployment templates:

```bash
webstudio build --template docker
```

During this phase, the CLI establishes the necessary routes and pages, scaffolding the application using the selected React Router template. Assets such as images and fonts are downloaded to the `assets` folder inside `public`.

Once the project is scaffolded, run `npm install` and then `npm run dev` to run your app in development mode. To build a production version, run `npm run build`.

Build a static site with:

```bash
webstudio build --template ssg
```

Please review [the limitations](university/self-hosting/#ssg-limitations) of using the static site export instead of dynamic templates.

## Import into another Project

Use `import` to transfer the synced Project bundle into another Webstudio Project:

```bash
webstudio import --to "<destination-share-link>"
```

Run `webstudio sync` before importing. The command reads `.webstudio/data.json` and imports it into the destination Project. The destination share link must include Build access. If you omit `--to` in an interactive terminal, the CLI prompts you to paste the destination share link.

By default, the CLI reads referenced asset files from `.webstudio/assets`, uploads them to the destination Project, and imports the asset records. Use `--assets-dir` when the asset files are somewhere else:

```bash
webstudio import --to "<destination-share-link>" --assets-dir "./path/to/assets"
```

To import Project data without asset files or asset records, use:

```bash
webstudio import --to "<destination-share-link>" --skip-assets
```

If the synced bundle version does not match the destination API version, the CLI stops before importing. Use `--ignore-version-check` only when you know the source and target data formats are compatible.

## Preview and screenshot

Run the generated app locally:

```bash
webstudio preview --template ssg --port 5173
```

The preview command uses `.webstudio/data.json`, so run `webstudio sync` first. It does not install dependencies for the generated app. For a fresh checkout or newly generated app, run `npm install` or `pnpm install` before previewing.

Capture a screenshot with an installed Chromium-family browser:

```bash
webstudio screenshot "http://127.0.0.1:5173" --output current.png --width 1440 --height 900
```

## Publish and domains

These commands operate on the configured Project and return JSON. Check the configured token's capabilities first:

```bash
webstudio permissions --json
```

Publish, inspect publish jobs, and unpublish:

```bash
webstudio publish deploy --target production --json
webstudio publish list --json
webstudio publish status --job <build-id> --json
webstudio publish unpublish --target production --confirm --json
```

List and manage custom domains:

```bash
webstudio domains list --json
webstudio domains create --domain example.com --json
webstudio domains verify --domain-id <domain-id> --json
webstudio domains delete --domain-id <domain-id> --confirm --json
```

Use `--confirm` only for destructive commands the user explicitly wants to run, such as unpublish, domain deletion, or replacement.

## API, manuals, and MCP

The CLI includes built-in manuals and machine-readable schemas:

```bash
webstudio man api
webstudio man llm --json
webstudio man mcp
webstudio schema api --json
```

API commands follow these rules:

- They operate on the configured Project only; do not pass a Project ID.
- Use `--json`; successful responses are JSON on stdout, while diagnostics go to stderr.
- Read IDs before writing. Do not invent IDs for existing pages, domains, assets, or other records.
- Use `--refresh` before local-capable commands when cached Project data may be stale.

For detailed Project editing and automation, start the MCP server:

```bash
webstudio mcp
```

After startup, MCP clients can discover capabilities with `tools/list`, `resources/list`, `meta.index`, `meta.guide`, and `meta.get_more_tools`.

Useful MCP resources include:

- `webstudio://project/status`
- `webstudio://project/tools`
- `webstudio://project/guide`

Prefer semantic MCP tools for Project edits. Use raw `apply-patch` only when no semantic tool exists, and read the latest snapshot before writing.

## Related

- [Download](university/self-hosting/download.md) – Export a static site directly from the Builder
- [Netlify](university/self-hosting/netlify.md) – Deploy your project to Netlify
- [Vercel](university/self-hosting/vercel.md) – Deploy your project to Vercel
- [VPS with Docker](university/self-hosting/vps-with-docker.md) – Deploy to your own server using Docker
- [Publishing and custom domains](university/foundations/publishing-and-custom-domains.md) – Set up custom domains for your site
