import { ArrowUp } from 'lucide-react';
import { Container } from '../common/Container';

const footerLinks = ['Home', 'Projects', 'Experience', 'About', 'Contact'];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container
        size="wide"
        className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
      >
        <div>
          <a href="#home" className="font-mono text-sm font-semibold text-primary">
            <span className="text-cyan">&lt;</span>Aseel.Dev
            <span className="text-violet">/&gt;</span>
          </a>
          <p className="mt-2 text-xs text-secondary">Frontend Engineer · Jenin, Palestine</p>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-x-5 gap-y-2"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-secondary transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <p className="text-xs text-secondary">© 2026 Aseel Hussain Al-Ali</p>
          <a
            href="#home"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-secondary transition hover:border-cyan/40 hover:text-primary"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
