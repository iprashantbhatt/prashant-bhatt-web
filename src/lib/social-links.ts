import { Github, Linkedin, Twitter, Instagram, Mail, Layers, type LucideIcon } from 'lucide-react';

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  color?: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'X',
    href: '#',
    icon: Twitter,
    color: 'from-gray-900 to-black',
  },
  {
    name: 'Blog',
    href: '#',
    icon: Layers,
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Contact',
    href: 'mailto:hello@prashantbhatt.com',
    icon: Mail,
    color: 'from-green-400 to-green-600',
  },
];
