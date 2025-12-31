'use client';
import React from 'react';
import Image from 'next/image';
import { 
  ChevronUp,
} from 'lucide-react';
import StatusBar from '@/components/os/StatusBar';
import AppIcon from '@/components/os/AppIcon';
import ProjectCard from '@/components/os/ProjectCard';
import { socialLinks } from '@/lib/social-links';
import { projectsData } from '@/lib/projects';
import { PlaceHolderImages } from '@/lib/placeholder-images';


/* --- ASSETS & CONSTANTS --- */
const PROFILE_IMAGE_URL = "/profile.jpg"; 
const WALLPAPER_URL = PlaceHolderImages.find(p => p.id === 'os-wallpaper')?.imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

export default function App() {
  const contactLink = socialLinks.find(link => link.name === 'Contact');

  return (
    <div
      id="main-container"
      className="relative w-full h-screen overflow-y-auto bg-black font-sans selection:bg-blue-500/30 md:w-[90vw] md:h-[95vh] md:max-w-[1200px] md:max-h-[800px] md:rounded-[40px] md:border-[14px] md:border-black shadow-2xl custom-scrollbar"
    >
        {/* Background Wallpaper */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out scale-105"
          style={{ 
            backgroundImage: `url(${WALLPAPER_URL})`,
          }}
        />
        
        {/* Overlay Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />

        {/* Main Container */}
        <div className="relative z-10 w-full h-full flex flex-col">
          <StatusBar />

          {/* --- PAGE 1: HOME / IDENTITY --- */}
          <div className="w-full h-screen flex flex-col p-6 md:p-12">
            
            {/* Identity Section */}
            <div className="flex-1 flex flex-col items-center justify-center mt-[-60px] md:mt-0">
              
              {/* 3D Profile Picture */}
              <div className="group relative w-32 h-32 md:w-48 md:h-48 mb-8 perspective-1000">
                <div className="relative w-full h-full rounded-full p-1 bg-white/20 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-12 cursor-pointer transform-style-3d">
                   <Image 
                    src={PROFILE_IMAGE_URL}
                    alt="Prashant Bhatt"
                    width={192}
                    height={192} 
                    className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-inner"
                    data-ai-hint="man portrait"
                  />
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-black/20 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                </div>
              </div>

              {/* Typography */}
              <div className="text-center space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                  Prashant Bhatt
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-light tracking-wide flex items-center justify-center gap-2">
                💼 Banker | 💻 Digital Explorer From Blockchain to Agentic AI
                </p>
              </div>
            </div>

            {/* App Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4 md:gap-8 max-w-4xl mx-auto pb-8 md:pb-12">
              {socialLinks.map((link, i) => (
                <AppIcon key={link.name} link={link} />
              ))}
            </div>
          </div>

          {/* --- PAGE 2: WORK / DEVELOPER --- */}
          <div className="w-full min-h-screen bg-black/30 backdrop-blur-xl flex flex-col">
            <div className="flex-1">
              <div className="w-full max-w-6xl mx-auto px-6 pt-20 pb-24">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Projects</h2>
                    <p className="text-white/60">Selected works &amp; experiments</p>
                  </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                  {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* --- PAGE 3: CONTACT --- */}
          <div className="w-full min-h-screen bg-black/50 flex flex-col items-center justify-center p-6 md:p-12 text-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                  Have a project in mind, a question, or just want to connect? Feel free to reach out.
                </p>
                {contactLink && <AppIcon link={contactLink} />}
              </div>

              {/* Additional Section: Tech Stack */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies Using</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'Three.js', 'Tailwind', 'PostgreSQL', ].map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 cursor-default transition-colors border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
}
