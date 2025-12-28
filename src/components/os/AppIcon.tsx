'use client';
import type { SocialLink } from '@/lib/social-links';

type AppIconProps = {
  link: SocialLink;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function AppIcon({ link, onClick }: AppIconProps) {
  const Icon = link.icon;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };
  
  return (
    <a
      href={link.href}
      target={onClick ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group"
      onClick={handleClick}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ease-out group-hover:shadow-accent/40 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:bg-white/50">
        <div className="flex items-center justify-center w-full h-full">
          <Icon className="w-8 h-8 text-slate-800" />
        </div>
      </div>
      <span className="text-xs text-white font-medium drop-shadow-md">{link.name}</span>
    </a>
  );
}
