import type { Project } from '../types/portfolio';
import educationImage from '../assets/projects/education.webp';
import edentistImage from '../assets/projects/edentist.webp';
import guruhubImage from '../assets/projects/guruhub.webp';

export const projects: Project[] = [
  {
    id: 'mohammed-soboh',
    number: '01',
    title: 'Mohammed Soboh Education Platform',
    category: 'Education / Arabic RTL',
    description:
      'A responsive education platform for organizing classes, learning content, and student access in one structured experience.',
    details:
      'The platform combines structured course content with clear navigation, secure student access, and an Arabic-first interface with full RTL support across desktop and mobile.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    image: educationImage,
    imageAlt: 'Arabic homepage of the Mohammed Soboh physics education platform',
    url: 'https://www.mohammedsubuh.com/',
    featured: true,
    preview: 'image',
  },
  {
    id: 'edentist',
    number: '02',
    title: 'eDentist.ai',
    category: 'Healthcare / AI',
    description:
      'An AI-assisted dental platform for capturing dental images, reviewing detected conditions, and receiving a structured visual report.',
    details:
      'The responsive experience guides users through image capture and upload, then presents tooth-level findings in a clear report flow that makes results easier to review.',
    technologies: ['Next.js', 'TypeScript', 'AI'],
    image: edentistImage,
    imageAlt: 'eDentist.ai homepage showing its AI-powered dental care experience',
    url: 'https://edentist.ai',
    preview: 'image',
  },
  {
    id: 'guruhub',
    number: '03',
    title: 'GuruHub',
    category: 'Learning Platform',
    description:
      'A learning platform that helps users discover curated resources and follow structured roadmaps instead of searching across scattered content.',
    details:
      'Built with Next.js and reusable frontend components, the interface brings roadmaps and educational resources into one focused, responsive experience.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: guruhubImage,
    imageAlt: 'GuruHub homepage introducing learning roadmaps and curated resources',
    url: 'https://guruhub.io/',
    preview: 'image',
  },
  {
    id: 'social',
    number: '04',
    title: 'Social Website',
    category: 'Social Platform',
    description:
      'A responsive social platform with a content feed, side navigation, posts, and real-time interaction patterns.',
    details:
      'Built with reusable React and TypeScript components for content sharing and consistent social product flows across screen sizes.',
    technologies: ['React', 'TypeScript', 'Socket.io'],
    preview: 'social',
  },
];
