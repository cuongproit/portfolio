import { skillCategories } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Stack</h2>
          <p className="text-slate-400">Tools I reach for daily — not just listed for SEO.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-400">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
