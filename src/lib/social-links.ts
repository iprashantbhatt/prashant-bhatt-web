import { Github, Linkedin, Twitter, Instagram, Mail, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'Portfolio',
    href: '#', 
    icon: Briefcase,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'Email',
    href: 'mailto:prashant@example.com',
    icon: Mail,
  },
];
