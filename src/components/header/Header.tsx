import { Menu, Moon, Sun, X } from 'lucide-react';
import { m } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useHeaderControls } from '../../hooks/useHeaderControls';
import { Container } from '../common/Container';
import { GlowButton } from '../common/GlowButton';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];
const sectionIds = links.map((link) => link.id);

export function Header() {
  const activeSection = useActiveSection(sectionIds);
  const { closeMenu, lightTheme, menuOpen, scrolled, toggleMenu, toggleTheme } =
    useHeaderControls();

  return (
    <m.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <Container>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
            scrolled
              ? 'border border-border bg-background/80 py-2.5 shadow-2xl backdrop-blur-xl'
              : 'py-2'
          }`}
        >
          <a href="#home" className="font-mono text-base font-semibold tracking-tight text-primary">
            <span className="text-cyan">&lt;</span>Aseel<span className="text-secondary">.Dev</span>
            <span className="text-violet">/&gt;</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  activeSection === link.id
                    ? 'bg-cyan/10 text-cyan shadow-[inset_0_0_0_1px_rgb(var(--cyan)/0.25)]'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-secondary transition hover:border-cyan/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              aria-label={`Switch to ${lightTheme ? 'dark' : 'light'} theme`}
            >
              {lightTheme ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <GlowButton href="#contact" className="hidden min-h-10 px-5 sm:inline-flex">
              Let&apos;s Talk
            </GlowButton>
            <button
              type="button"
              onClick={toggleMenu}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary lg:hidden"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            className="mt-2 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-base text-secondary transition hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </Container>
    </m.header>
  );
}
