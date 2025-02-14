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

## Deployment

```bash
pnpm gh-pages
```

## License

MIT, see [LICENSE](LICENSE)
