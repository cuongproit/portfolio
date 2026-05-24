# cuongproit.dev — portfolio site

Personal portfolio for Cuong Dao — full-stack engineer with AI-native workflow.

Showcases 5 open-source reference implementations: ClaudeStack (Next.js SaaS + Claude), Pulse (realtime), Pocket Shop (Flutter), Endurance API (REST), Quaver (serverless).

## Stack

- Next.js 15 App Router + TypeScript strict
- Tailwind CSS 3 + Lucide icons + Inter (Google Fonts)
- Dark mode default, mesh gradient hero
- Static-friendly — no API routes, deploys to any CDN

## Run

```bash
pnpm install
pnpm dev    # http://localhost:3000
pnpm build  # production build
```

## Deploy

```bash
# Vercel (recommended — automatic preview deploys per commit)
# 1. Push to GitHub
# 2. Go to vercel.com/new, import this repo
# 3. Add custom domain (e.g. cuongproit.dev) in Project Settings → Domains
# 4. Done — 90 seconds end-to-end

# Or: Cloudflare Pages, Netlify — both work since this is plain Next.js with no server-only deps
```

## Update content

All project data lives in `lib/data.ts`. Edit `projects[]`, `skillCategories[]`, `contactLinks[]` — page rebuilds automatically.

To add a new project: add an entry to `projects` array with `slug`, `title`, `description`, `stack`, `highlights`, `repo`, and an icon from `lucide-react`.

## License

MIT.
