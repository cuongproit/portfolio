import { Zap, Code, Globe } from 'lucide-react';

export function About() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">About me</h2>
          <p className="text-slate-400">A practical engineer who values shipping over architecting.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card icon={Zap} title="Speed without sacrifice">
            I use Claude Code as a force multiplier — design + scaffold + iterate fast,
            then review every diff myself. Delivery in days instead of weeks, code that scales,
            not throwaway demos.
          </Card>
          <Card icon={Code} title="Full-stack, actually">
            React/Next on the front, Node + Postgres on the back, Flutter for mobile,
            AWS for infrastructure. I don't subcontract layers I don't understand.
          </Card>
          <Card icon={Globe} title="Remote-first">
            Vietnam GMT+7 — overlap with EU mornings and US evenings.
            Async daily standups, weekly Loom demos, milestones on Upwork/Fiverr payment protection.
          </Card>
        </div>

        <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-slate-300">
          <p className="text-lg leading-relaxed">
            I&apos;ve been a full-stack developer for 10+ years, shipping production apps for
            startups and agencies. In 2026 I went independent to focus on AI-integrated products —
            Claude API, RAG systems, agentic workflows. I&apos;m at my best when a project has{' '}
            <strong className="text-white">clear ownership</strong> and{' '}
            <strong className="text-white">honest scope</strong> — I&apos;ll push back on vague briefs
            and tell you what&apos;s actually needed before quoting.
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, children }: { icon: typeof Zap; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-violet-500/20 hover:bg-violet-500/[0.03]">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{children}</p>
    </div>
  );
}
