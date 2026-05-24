import { contactLinks } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-mesh py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Have a project? <span className="text-gradient">Let&apos;s talk.</span>
        </h2>
        <p className="mb-10 text-slate-400 md:text-lg">
          I take 2-3 projects at a time. Quick scope chat, honest quote, milestone delivery.
          Currently booking for June 2026 onward.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white transition-colors hover:border-violet-500/30 hover:bg-white/[0.06]"
            >
              <Icon className="h-4 w-4 text-slate-400 group-hover:text-violet-400" />
              <span>{label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>

        <div className="mx-auto max-w-lg rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-left">
          <h3 className="mb-3 text-sm font-semibold text-white">What I&apos;ll need to quote you</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex gap-2"><span className="text-violet-400">→</span> Project description (1-2 paragraphs is fine)</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Timeline (deadline + flexibility)</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Existing tech stack or constraints, if any</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Budget range — saves us both time</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
