import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.04]">
      {/* Background gradient accent */}
      <div
        className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`}
      />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.accent} shadow-lg`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div className="flex gap-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="GitHub repo"
            >
              <Github className="h-4 w-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="mb-1 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-xs text-slate-500">{project.tagline}</p>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mb-5 space-y-1.5 text-xs text-slate-500">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-violet-400">→</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-500">
              +{project.stack.length - 6}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
