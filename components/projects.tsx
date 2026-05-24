import { projects } from '@/lib/data';
import { ProjectCard } from './project-card';

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Selected projects</h2>
          <p className="max-w-2xl text-slate-400">
            Open-source reference implementations covering web SaaS, real-time dashboards,
            mobile apps, REST backends, and serverless infrastructure. Each repo includes
            production-grade patterns, full READMEs, and is ready to fork.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
