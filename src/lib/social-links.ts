import { Github, Linkedin, Twitter, Instagram, Mail, Layers, type LucideIcon } from 'lucide-react';

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  color?: string;
  shadowColor?: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/iprashantbhatt',
    icon: Instagram,
    color: '#E1306C',
    shadowColor: '#8a1d60',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prashantbhatt1/',
    icon: Linkedin,
    color: '#0077b5',
    shadowColor: '#004d75',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/iprashantbhatt',
    icon: Github,
    color: '#2b3137',
    shadowColor: '#1a1e22',
  },
  {
    name: 'X',
    href: 'https://x.com/iamprashantb',
    icon: Twitter,
    color: '#1a1a1a',
    shadowColor: '#000000',
  },
  {
    name: 'Blog',
    href: 'https://prashantbhatt.net',
    icon: Layers,
    color: '#f97316',
    shadowColor: '#c2410c',
  },
  {
    name: 'Contact',
    href: 'mailto:info@prashantbhatt.net',
    icon: Mail,
    color: '#8b5cf6',
    shadowColor: '#6d28d9',
  },
];
