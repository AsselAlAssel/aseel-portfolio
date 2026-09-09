export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  url?: string;
  featured?: boolean;
  preview: 'image' | 'social';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  mark: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'facebook' | 'whatsapp' | 'email';
}
