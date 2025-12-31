'use client';
import { useState, useEffect, useMemo } from 'react';
import type { SocialLink } from '@/lib/social-links';

type AppIconProps = {
  link: SocialLink;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function AppIcon({ link, onClick }: AppIconProps) {
  const Icon = link.icon;
  const [animationDelay, setAnimationDelay] = useState('0s');

  useEffect(() => {
    // This ensures Math.random() is only called on the client, after hydration
    setAnimationDelay(`${Math.random() * 2}s`);
  }, []);

  const btnColor = link.color;
  const shadowColor = link.shadowColor;

  const style = useMemo(() => ({
    '--btn-color': btnColor,
    '--shadow-color': shadowColor,
    'animationDelay': animationDelay
  } as React.CSSProperties), [btnColor, shadowColor, animationDelay]);


  return (
    <a 
      href={link.href} 
      onClick={onClick}
      className="group relative flex flex-col items-center gap-2 cursor-pointer"
      style={style}
    >
      <div 
        className={`
          relative inline-flex justify-center items-center 
          w-16 h-16 md:w-20 md:h-20
          rounded-2xl md:rounded-3xl
          transition-transform duration-150 ease-in-out
          shadow-btn-3d hover:shadow-btn-3d-hover active:shadow-btn-3d-active
          hover:-translate-y-1 active:translate-y-1
          animate-float
        `}
      >
        <Icon className="text-white w-8 h-8 md:w-10 md:h-10 drop-shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.5} />
         {/* Glossy reflection effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl md:rounded-t-3xl pointer-events-none" />
      </div>

      <span className="text-xs md:text-sm text-white font-medium tracking-tight drop-shadow-md opacity-90 group-hover:opacity-100">
        {link.name}
      </span>
    </a>
  );
}
