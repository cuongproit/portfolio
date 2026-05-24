import { ArrowDown, Github, Mail, MapPin, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs text-violet-300 animate-fade-in-up">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Available for client work</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl animate-fade-in-up">
          Full-stack engineer
          <br />
          with an <span className="text-gradient">AI-native workflow</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base text-slate-400 md:text-lg animate-fade-in-up">
          I ship production-grade web, mobile, and serverless products. Web (Next.js / React),
          mobile (Flutter), backend (Node + Postgres + AWS), and Claude integrations.
          Vietnam-based, working with EU and US clients.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up">
          <a
            href="#projects"
            className="rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-105"
          >
            See my work
          </a>
          <a
            href="mailto:cuong.xteam@gmail.com"
            className="rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
          >
            <Mail className="mr-2 inline h-4 w-4" /> Get in touch
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Vietnam · GMT+7</span>
          <span className="flex items-center gap-1.5"><Github className="h-3.5 w-3.5" /> github.com/cuongproit</span>
        </div>

        <div className="mt-16 flex justify-center text-slate-600 animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
