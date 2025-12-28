'use client';
import { useState } from 'react';
import Image from 'next/image';
import HomeScreen from '@/components/os/HomeScreen';
import DeveloperWorkPage from '@/components/os/DeveloperWorkPage';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [isWorkPageOpen, setIsWorkPageOpen] = useState(false);
  const wallpaper = PlaceHolderImages.find(img => img.id === 'os-wallpaper');

  return (
    <div className="bg-slate-200">
      <main className="relative w-screen h-screen overflow-hidden bg-background flex items-center justify-center font-body">
        {wallpaper && (
          <Image
            src={wallpaper.imageUrl}
            alt={wallpaper.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={wallpaper.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/10" />

        {/* OS Container */}
        <div className="relative w-full h-full md:w-[420px] md:h-[840px] md:rounded-[40px] md:shadow-2xl md:border-[10px] border-black overflow-hidden bg-background">
          <div className="absolute inset-0 bg-black/5 pointer-events-none z-10 md:rounded-[30px]" />
          
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: isWorkPageOpen ? 'translateY(-100%)' : 'translateY(0)' }}
          >
            <div className="w-full h-full">
              <HomeScreen onShowWork={() => setIsWorkPageOpen(true)} />
            </div>
            <div className="absolute top-full w-full h-full">
              <DeveloperWorkPage onGoHome={() => setIsWorkPageOpen(false)} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
