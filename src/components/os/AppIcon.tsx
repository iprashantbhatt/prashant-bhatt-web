'use client';
import type { SocialLink } from '@/lib/social-links';

type AppIconProps = {
  link: SocialLink;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function AppIcon({ link, onClick }: AppIconProps) {
  const Icon = link.icon;

  return (
    <a 
      href={link.href} 
      onClick={onClick}
      className="group flex flex-col items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <div className={`
        relative w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl 
        bg-gradient-to-br ${link.color} 
        flex items-center justify-center 
        shadow-lg shadow-black/20 
        transform transition-all duration-500
        group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-${link.color?.split('-')[1]}-500/40
        before:content-[''] before:absolute before:inset-0 before:bg-white/20 before:rounded-2xl before:opacity-0 group-hover:before:opacity-100 before:transition-opacity
      `}>
        <Icon className="text-white w-8 h-8 md:w-10 md:h-10 drop-shadow-md" strokeWidth={1.5} />
        {/* Glossy reflection effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl md:rounded-t-3xl pointer-events-none" />
      </div>
      <span className="text-xs md:text-sm text-white font-medium tracking-tight drop-shadow-md opacity-90 group-hover:opacity-100">
        {link.name}
      </span>
    </a>
  );
}
