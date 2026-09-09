import { LazyMotion, MotionConfig } from 'framer-motion';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { TechStrip } from './components/common/TechStrip';
import { Experience } from './components/experience/Experience';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Projects } from './components/projects/Projects';

const loadMotionFeatures = () => import('./utils/motionFeatures').then((module) => module.default);

export default function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <Hero />
          <TechStrip />
          <Projects />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
