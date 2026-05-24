import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-fuchsia-600">
            <span className="text-xs font-bold text-white">CD</span>
          </div>
          <span>Cuong Dao</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <a href="#projects" className="transition-colors hover:text-white">Projects</a>
          <a href="#skills" className="transition-colors hover:text-white">Skills</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/cuongproit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:cuong.xteam@gmail.com"
            className="rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1.5 text-sm font-medium text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-105"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
