---
description: >-
  Webstudio's Command Line Interface (CLI) allows you to interact directly with
  your Projects from the command line.
---

# ▶️ CLI

One of the key features of Webstudio's CLI is its exporting capability. With this, you can export your entire Webstudio Project in full.

Once exported, these projects are ready to be deployed on any hosting platform of your choice - giving you complete freedom over where and how your website goes live.

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

## Initiating a Webstudio Project

Now, you can run a Webstudio Project on your local machine using this command:

```bash
webstudio
```

This will initiate the flow to connect your Webstudio Cloud project and build it in your local computer. The default flow will guide you through the steps. You can also perform all the operations individually using independent commands.

### Commands

Here is the list of independent commands:

- version
- help
- link
- sync
- build

#### link

The **`link`** command syncs your local Webstudio Project with the Project from the Cloud. This means that any changes made in the Cloud can be synced to the local Project, once they are published.

You can link a Project from Webstudio Cloud with the following command:

```bash
webstudio link
```

This command will prompt you to paste a link which you can create using the _Share_ option in your Project.

**Make sure to provide Build access when generating the link in Webstudio Cloud.**

#### sync

Once the project is linked, use the **`sync`** command to sync it with the Cloud:

```bash
webstudio sync
```

Make sure to publish the Project in Webstudio Cloud before running the **`sync`** command in your local Webstudio Project.

#### build

Now, you can build your Project as a dynamic app or static site using the **`build`** command:

```bash
webstudio build
```

{% hint style="info" %}
See [export types](./#export-types) for more information about JavaScript applications vs. static sites.
{% endhint %}

**Build a JavaScript application**

During this phase, the CLI establishes the necessary routes and pages, scaffolding the entire application using the default Remix template. Additionally, all assets, such as images and fonts, are downloaded to the `assets` folder inside the `public` directory.

Once the project is scaffolded, you can run `npm install` and then `npm run dev` to run your app in development mode.

If you want to build a production version of the app, you can run `npm run build`.

See [JavaScript app hosting platforms](./#platforms-for-javascript-applications) we have documented.

**Build a static site**

You can optionally build the project as a static site by selecting "Static Site Generation (SSG)" in templates or with the following command:

```bash
webstudio build --template ssg
```

Please review [the limitations](./#ssg-limitations) of using the static site export instead of dynamic (i.e., all the other options in templates).

See [static site hosting platforms](./#platforms-for-static-sites) we have documented.

## Related

- [Download](./download.md) – Export a static site directly from the Builder
- [Netlify](./netlify.md) – Deploy your project to Netlify
- [Vercel](./vercel.md) – Deploy your project to Vercel
- [VPS with Docker](./vps-with-docker.md) – Deploy to your own server using Docker
- [Publishing and Custom Domains](../foundations/publishing-and-custom-domains.md) – Set up custom domains for your site
