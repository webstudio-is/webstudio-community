# Contributing

## Process

If you want to contribute and don't know where to start, here is a step-by-step for a complete lifecycle, from idea to deployment.

1. If you have an idea that is not already in [discussion](https://github.com/webstudio-is/webstudio/discussions) or [issues](https://github.com/webstudio-is/webstudio-designer/issues), please start a discussion or reach out on [discord](https://discord.gg/UNdyrDkq5r)

1. We welcome everyone, developers and non-developers. If you are a developer and would like to build it - please say so and we will assign the issue to you, so you will have a complete ownership over it's development.

   If you are a designer, you can lead the process too. We will find a developer who will pair up with you.

1. After submitting an enhancement or a bug we need to agree on a solution. You can jump into implementation right away, but be aware that we have to agree on the solution in the end. Communicating the problem you are solving and why you think the approach you are taking is the best is key for a quick process.

   In fact, we are happy to help communicating your ideas, so if you are not sure - talk to us on discord.

1. When the implementation is in a mergeable state, a core team member will deploy it to production.

## Designer installation

1. Install [Node.js](https://nodejs.dev/learn/how-to-install-nodejs)
2. Install [Yarn](https://yarnpkg.com/) `npm i -g yarn`
3. Install [MongoDB](https://www.mongodb.com/) or use [Atlas](https://www.mongodb.com/atlas/database) (recommended)
4. Clone the repository `git clone git@github.com:webstudio-is/webstudio-designer.git`
5. Connect to the [database](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/connect-your-database-typescript-mongodb): add a database URL to the env variables by creating an .env file in the root of the project and adding there `DATABASE_URL="mongodb+srv://user:password@host"`
6. Run `yarn` - install dependencies
7. Run `yarn dev` - URL will be logged


## Run designer and sdk in parallel

For this we current use [relative-deps](https://github.com/mweststrate/relative-deps) and the way you can run both things is the following:

* Git clone the sdk at https://github.com/webstudio-is/webstudio-sdk
* In the designer run `yarn dev` and in another window run `yarn sdk:watch`

This will trigger a build of the sdk when you make changes and that will in turn reload your designer.

## Designer deployment to Vercel

1. [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.
2. Add DATABASE_URL to env variables
3. Redeploy

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
