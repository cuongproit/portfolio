export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Cuong Dao · Built with Next.js, Tailwind, and a lot of coffee ·{' '}
        <a
          href="https://github.com/cuongproit/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-slate-400"
        >
          source
        </a>
      </div>
    </footer>
  );
}
