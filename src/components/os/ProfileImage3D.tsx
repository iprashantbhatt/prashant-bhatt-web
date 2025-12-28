'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProfileImage3D() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'prashant-profile');

  if (!profileImage) {
    return <div className="w-40 h-40 rounded-full bg-muted animate-pulse" />;
  }

  return (
    <div className="group" style={{ perspective: '1000px' }}>
      <div
        className="relative w-40 h-40 transition-transform duration-500 ease-out group-hover:[transform:translateZ(40px)_rotateY(15deg)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Image
          src={profileImage.imageUrl}
          alt={profileImage.description}
          width={160}
          height={160}
          className="rounded-full object-cover shadow-2xl"
          priority
          data-ai-hint={profileImage.imageHint}
        />
        {/* Extrusion effect */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-slate-300 to-slate-400 -z-10"
          style={{ transform: 'translateZ(-20px)'}}
        />
      </div>
    </div>
  );
}
