# Linkypoo link index static site

This code will generate you a link index static site that can be deployed anywhere without a server, e.g. github pages.

It's used to deploy to [https://me.zys.im/](https://me.zys.im/).

![screenshot](example.png)

Fork it, do whatever you like with it.


## Setup

1. Fork this repo (otherwise you'll just be linking to my stuff)
2. edit `src/routes/+page.ts` to add your links
    
    * You can add, remove categories as you like
    * Link icons can be either the name of a [flowbite-svelte-icon](https://flowbite-svelte.com/icons/solid-icons) component, or an SVG string (remember to set `linkIconSvg: true`)

3. Edit or remove `static/CNAME` (if you're deploying on github pages)

## Development

```bash
pnpm i
pnpm dev
```

## Build

```bash
pnpm build
```

By default, the output will end up in the `build` directory, which you can then put anywhere that serves static files. It also uses the 404.html page as a fallback for SPA routing (although, this is literally a single page, so it's not really necessary, but it can be useful in some cases).

## Deployment

To deploy to github pages, run:

```bash
pnpm gh-pages
```

This assumes you already have at least a github pages domain (e.g. `https://username.github.io/`), or have a custom domain set up, in which case you will need to put that domain in the `static/CNAME` file.

One note regarding github pages, if you deploy this to a subdirectory (e.g. `https://username.github.io/linkypoo/`), you will need to edit the `paths.base` config in `svelte.config.js` to reflect that (e.g. `base = '/linkypoo'`).

## License

MIT, see [LICENSE](LICENSE)
