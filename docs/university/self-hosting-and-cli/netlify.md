# ▶ Netlify

{% embed url="https://www.youtube.com/watch?v=Gr1jPtsg6_Q" %}

#### Netlify

Netlify, a popular choice for deploying modern static websites, offers features like continuous deployment from Git across a global application delivery network, serverless form handling, and more. It provides an ideal environment for deploying your Webstudio projects.

If you want to deploy to netlify, you can use [Netlify CLI](https://docs.netlify.com/cli/get-started/) to deploy your site directly to [Netlify](https://netlify.com/):

```
netlify deploy
```

You can configure the project to support netlify serverless/edge-functions respectively, as deployment target at the time of initially setting up your project. Please check the [initiating-a-webstudio-project](https://github.com/webstudio-is/webstudio/tree/main/packages/cli#initiating-a-webstudio-project) section.

You can manually change it using the `build` command. For serverless functions:

```
webstudio build --template netlify-functions
```

and for edge functions:

```
webstudio build --template netlify-edge-functions
```

###

\
