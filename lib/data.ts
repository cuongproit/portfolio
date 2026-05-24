import type { LucideIcon } from 'lucide-react';
import { Sparkles, Activity, ShoppingBag, Server, Cloud, Github, Mail, Twitter } from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  repo: string;
  demo?: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes (from-X to-Y)
}

export const projects: Project[] = [
  {
    slug: 'claudestack',
    title: 'ClaudeStack',
    tagline: 'Next.js 15 SaaS starter with Claude AI integration',
    description:
      "Production-ready SaaS template — auth, payments-ready, streaming AI chat with Claude Sonnet 4.5, dashboard, dark mode. Ship your AI product in days instead of months.",
    stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Better Auth', 'Drizzle', 'Anthropic SDK'],
    highlights: [
      '42 files, builds clean to 8 routes',
      'Email + password auth via Better Auth (less ceremony than NextAuth)',
      'Streaming Claude responses with markdown rendering',
      'Drizzle ORM — SQLite for dev, Turso for prod',
    ],
    repo: 'https://github.com/cuongproit/claudestack',
    icon: Sparkles,
    accent: 'from-violet-600 to-fuchsia-600',
  },
  {
    slug: 'pulse-realtime',
    title: 'Pulse',
    tagline: 'Real-time multi-user analytics dashboard',
    description:
      "WebSocket-driven live event stream with multi-user presence. Sub-100ms updates, polished dark UI, Recharts area chart that repaints every tick. Built to demonstrate a production realtime stack.",
    stack: ['React 19', 'Vite', 'Tailwind', 'Fastify', 'Socket.io', 'Drizzle', 'better-sqlite3', 'Recharts'],
    highlights: [
      '30 files across pnpm workspace (client + server)',
      'Single-table SQLite design with sub-ms writes',
      'Presence tracking via Socket.io rooms',
      'Filterable live feed with slide-in animations',
    ],
    repo: 'https://github.com/cuongproit/pulse-realtime',
    icon: Activity,
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    slug: 'pocket-shop',
    title: 'Pocket Shop',
    tagline: 'Flutter e-commerce MVP',
    description:
      "Cross-platform mobile shopping app with Material 3 dynamic colors, dark mode by default. Full product catalog → product detail → cart → checkout → order confirmation flow. Riverpod state, go_router navigation.",
    stack: ['Flutter 3', 'Dart', 'Riverpod 2', 'go_router', 'Material 3', 'google_fonts'],
    highlights: [
      '19 Dart files, feature-folder architecture',
      '12 mock products across 6 categories',
      'Hero image transitions on product detail',
      'Form validation + mock Stripe/Apple Pay/PayPal payment selection',
    ],
    repo: 'https://github.com/cuongproit/pocket-shop',
    icon: ShoppingBag,
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    slug: 'endurance-api',
    title: 'Endurance API',
    tagline: 'Production REST API boilerplate',
    description:
      "Fastify + Drizzle + Postgres + Argon2id + JWT + OpenAPI + Docker. The boring-but-essential parts of a SaaS backend, wired up correctly so you focus on domain logic. Ship your backend in hours.",
    stack: ['Fastify 5', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Argon2id', 'jose JWT', 'Swagger', 'vitest', 'Docker'],
    highlights: [
      '23 files, 4/4 vitest tests passing, builds clean',
      'OWASP 2024+ Argon2id hashing (memory-hard, GPU-resistant)',
      'JWT access + refresh tokens via spec-compliant jose',
      'OpenAPI 3.1 auto-generated docs at /docs',
      'Multi-stage Dockerfile runs as non-root',
    ],
    repo: 'https://github.com/cuongproit/endurance-api',
    icon: Server,
    accent: 'from-orange-500 to-red-600',
  },
  {
    slug: 'quaver',
    title: 'Quaver',
    tagline: 'Serverless URL shortener with click analytics',
    description:
      "AWS Lambda + DynamoDB single-table + API Gateway HTTP v2 + Terraform full IaC. ARM64 runtime, scoped IAM, TTL'd analytics events, ~$0.35/month at 10k clicks. A reference implementation of a cost-conscious serverless service.",
    stack: ['AWS Lambda (arm64)', 'DynamoDB single-table', 'API Gateway HTTP v2', 'Terraform 1.6', 'TypeScript', 'esbuild'],
    highlights: [
      '21 files including 7 Terraform modules',
      'Single-table DynamoDB (PK/SK with TTL on event rows)',
      'esbuild → 3 Lambda zips under 2KB each minified',
      'Detailed cost analysis in README ($0.35/M-clicks → $10/M)',
      'Scoped IAM — least privilege, only GetItem/PutItem/Query',
    ],
    repo: 'https://github.com/cuongproit/quaver',
    icon: Cloud,
    accent: 'from-sky-500 to-indigo-600',
  },
];

export const skillCategories = [
  {
    name: 'Frontend',
    items: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Vite', 'Framer Motion'],
  },
  {
    name: 'Mobile',
    items: ['Flutter 3', 'Riverpod', 'go_router', 'React Native', 'Expo'],
  },
  {
    name: 'Backend',
    items: ['Node 22', 'Fastify', 'Express', 'tRPC', 'PostgreSQL', 'Drizzle', 'Prisma', 'Redis'],
  },
  {
    name: 'Cloud + DevOps',
    items: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Vercel', 'Cloudflare', 'Terraform', 'Docker', 'GitHub Actions'],
  },
  {
    name: 'AI / LLM',
    items: ['Anthropic SDK', 'OpenAI', 'Vercel AI SDK', 'Claude Sonnet 4.5', 'LangChain', 'Vector DBs (pgvector)'],
  },
  {
    name: 'Practices',
    items: ['TypeScript strict', 'OWASP security', 'OpenAPI', 'Test-driven', 'Cost-conscious IaC', 'CI/CD'],
  },
];

export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/cuongproit', icon: Github },
  { label: 'Email', href: 'mailto:cuong.xteam@gmail.com', icon: Mail },
  { label: 'Twitter / X', href: 'https://twitter.com', icon: Twitter },
];
