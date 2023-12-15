# ▶ Vercel

{% embed url="https://www.youtube.com/watch?v=eoyB9DfWdT8" %}
How to Export and Self-Host Your Site on Vercel
{% endembed %}

#### Vercel

Vercel, a popular cloud platform for static sites and Serverless Functions, is known for its ease of use and performance optimization capabilities. It provides an ideal environment for deploying your Webstudio projects.

Once you've built the project locally, you can use the [Vercel CLI](https://vercel.com/docs/cli) to deploy your site directly to [Vercel](https://vercel.com/):

```
vercel deploy
```

Follow the instructions [here](https://vercel.com/docs/cli) to install the `vercel` CLI. We plan to add more deployment targets in future.

### Important Notes

If you use `vercel build` before `vercel deploy`, make sure to clean your `app` folder in the project afterward.

Vercel injects a few [files](https://github.com/vercel/vercel/blob/a8ad176262ef822860ce338927e6f959961d2d32/packages/remix/src/build.ts#L63) to support and deploy Remix using their CLI, but these files are not necessary for your project when you use it locally.
