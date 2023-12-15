# 📤 Self-Hosting & CLI

### Webstudio CLI

Webstudio's Command Line Interface (CLI) is a robust tool that provides everyone with the ability to interact directly with their projects from the command line.&#x20;

One of the key features of Webstudio's CLI is its exporting capability. With this, you can export your entire Webstudio project in full.&#x20;

Once exported, these projects are ready to be deployed on any hosting platform of your choice - giving you complete freedom over where and how your website goes live.&#x20;

To assist users through this process, we have comprehensive guides available detailing each step involved in exporting and self-hosting your projects. These guides provide clear instructions along with helpful tips to ensure a smooth transition from design to deployment.



### Prerequisites: Installing Node.js

You need Node.js to use the Webstudio CLI. If Node.js is already installed in your system, you can skip ahead to the section on installing the Webstudio CLI.

To install Node.js using NVM, first install NVM by running:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Once NVM is installed, you can install Node.js version 18 by running:

```
nvm install 18
```

Verify your Node.js installation by checking its version:

```
node --version
```

### Installing the Webstudio CLI

To get started with the Webstudio CLI:

1.  Download and install the CLI using the following command:

    ```
    npm install -g webstudio
    ```
2.  Confirm the installation by checking the CLI version:

    ```
    webstudio --version
    ```
3. To keep your CLI updated, use the same command used for installation whenever a new release is available.

### Initiating a Webstudio Project

Now, you can run a Webstudio project on your local machine using this command:

```
webstudio
```

This will initiate the flow to connect your Webstudio Cloud project and build it in your local computer. The default flow will guide you through the steps. You can also perform all the operations individually using independent commands.

### Commands

Here is the list of independent commands:

* version
* help
* link
* sync
* build

#### link

The **`link`** command syncs your local Webstudio project with the project from the cloud. This means that any changes made in the cloud can be synced to the local project, once they are published.

You can link a project from Webstudio Cloud with the following command:

```
webstudio link
```

This command will prompt you to paste a link which you can create using the _Share_ option in your project.

Make sure to provide _Build_ access when generating the link in Webstudio Cloud.

#### sync

Once the project is linked, use the **`sync`** command to sync it with the cloud:

```
webstudio sync
```

Make sure to publish the project in Webstudio Cloud before running the **`sync`** command in your local Webstudio project.

#### build

Now, you can build your project with the **`build`** command:

```
webstudio build
```

During this phase, the CLI establishes the necessary routes and pages, scaffolding the entire application using the default Remix template. Additionally, all assets, such as images and fonts are downloaded to the **`assets`** folder inside the **`public`** directory.

Once the project is scaffolded, you can run `npm install` and then `npm run dev` to run your app in development mode.

If you want to build a production version of the app, you can run `npm run build`.

### Deployment

{% content-ref url="vercel.md" %}
[vercel.md](vercel.md)
{% endcontent-ref %}

{% content-ref url="netlify.md" %}
[netlify.md](netlify.md)
{% endcontent-ref %}
