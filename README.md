# Adam Belda — Tech & Lifestyle Journal

The source for [adambelda.net](https://adambelda.net), a modern personal blog covering technology, gaming, food, events, and everyday life from Manila.

## Local development

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Project structure

- `app/page.tsx` — homepage
- `app/[slug]/page.tsx` — article pages
- `app/content.ts` — current article content
- `app/globals.css` — responsive visual system
- `public/og.png` — social sharing card

Built with Next.js, React, vinext, and Cloudflare-compatible deployment output.
