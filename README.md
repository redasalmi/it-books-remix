# IT BOOKS (Remix version)

A website to browse for IT, Programming and Computer Science Books. found at: [https://itbooks-remix.netlify.app](https://itbooks-remix.netlify.app/).

## Other versions

This website exists in multiple versions which you can find here:

- [It Books (CRA version)](https://github.com/redasalmi/it-books) found at [https://itbooks.netlify.app](https://itbooks.netlify.app/).

- [It Books (Next.js version)](https://github.com/redasalmi/it-books-nextjs) found at [https://itbooks-next.netlify.app](https://itbooks-next.netlify.app/).

- [It Books (Remix version)](https://github.com/redasalmi/it-books-remix) found at [https://itbooks-remix.netlify.app](https://itbooks-remix.netlify.app/).

## Built With

- [Remix](https://remix.run/)
- IT Bookstore API to fetch data found at: [https://api.itbook.store](https://api.itbook.store/)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
