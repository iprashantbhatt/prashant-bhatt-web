'use client';
import { socialLinks, type SocialLink } from '@/lib/social-links';
import AppIcon from './AppIcon';

type DockProps = {
    onPortfolioClick: () => void;
}

export default function Dock({ onPortfolioClick }: DockProps) {

  const handleIconClick = (link: SocialLink, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.name === 'Portfolio') {
        onPortfolioClick();
    }
  };
    
  return (
    <div className="w-full flex justify-center p-2 absolute bottom-2 left-0 right-0">
      <div className="flex items-center justify-center gap-3 md:gap-4 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg">
        {socialLinks.map(link => (
          <AppIcon 
            key={link.name} 
            link={link} 
            onClick={link.name === 'Portfolio' ? (e) => handleIconClick(link, e) : undefined} 
          />
        ))}
      </div>
    </div>
  );
}
