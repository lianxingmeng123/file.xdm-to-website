# Restapify website

Source code of the [official website](https://restapify.vercel.app/) of Restapify.

## Getting started

### Running the project

Once you have download the project, install dependencies and run the project in development mode:

```bash
yarn # or npm i
yarn dev # or npm run dec
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.

You now have a fully functional Sapper project! To get started developing, consult [sapper.svelte.dev](https://sapper.svelte.dev).

## Production mode and deployment

To start a production version of your app, run `yarn build && yarn start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [Vercel Now](https://vercel.com) when using `sapper export`, run these commands:

```bash
yarn global add vercel # or npm install -g vercel
yarn deploy
```

