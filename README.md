# Beauty & Lifestyle Blog (Astro)
- Rename site, edit nav/categories/homepage rows: `src/config/site.ts`
- New post: add `src/content/posts/my-slug.md` (see sample posts for frontmatter). Images go in `public/images/`.
- Callout: write `> **Pro tip:** ...` in Markdown.
- Dev: `npm install && npm run dev`
- Cloudflare Pages: connect repo, build command `npm run build`, output directory `dist`.
- Before launch: set real domain in `astro.config.mjs` and `public/robots.txt`; set form URLs (contact, newsletter); replace legal placeholders.
