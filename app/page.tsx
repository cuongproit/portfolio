import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
