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
    href: 'https://www.instagram.com/prashantbhatt.eth',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prashantbhatt-web3/',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/prashantbhatt-eth',
    icon: Github,
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'X',
    href: 'https://x.com/prashantbhatt_',
    icon: Twitter,
    color: 'from-gray-900 to-black',
  },
  {
    name: 'Blog',
    href: 'https://mirror.xyz/prashantbhatt.eth',
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
