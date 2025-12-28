'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Instagram, 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  Briefcase, 
  Cpu, 
  Code, 
  Zap, 
  ChevronUp, 
  ExternalLink,
  Layers,
  Terminal,
  Smartphone
} from 'lucide-react';

/* --- ASSETS & CONSTANTS --- */
const PROFILE_IMAGE_URL = "/profile.jpg"; 
const WALLPAPER_URL = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

const SOCIAL_LINKS = [
  { id: 'instagram', icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-600', link: '#' },
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800', link: '#' },
  { id: 'github', icon: Github, label: 'GitHub', color: 'from-gray-700 to-gray-900', link: '#' },
  { id: 'twitter', icon: Twitter, label: 'X', color: 'from-gray-900 to-black', link: '#' },
  { id: 'blog', icon: Layers, label: 'Blog', color: 'from-orange-400 to-red-500', link: '#' },
  { id: 'email', icon: Mail, label: 'Contact', color: 'from-green-400 to-green-600', link: 'mailto:hello@prashantbhatt.com' },
];

const PROJECTS = [
  {
    id: 1,
    title: "Neuro-AI Agent",
    category: "AI Architecture",
    icon: Cpu,
    color: "bg-blue-500",
    description: "Autonomous reasoning engine capable of multi-step problem solving with recursive self-correction."
  },
  {
    id: 2,
    title: "Flux UI Kit",
    category: "Design System",
    icon: Layers,
    color: "bg-purple-500",
    description: "A comprehensive React component library focusing on glassmorphism and fluid animations."
  },
  {
    id: 3,
    title: "Echo Voice Assistant",
    category: "Machine Learning",
    icon: Zap,
    color: "bg-yellow-500",
    description: "Real-time natural language processing interface with < 100ms latency on edge devices."
  },
  {
    id: 4,
    title: "Quantum Pay",
    category: "FinTech App",
    icon: Smartphone,
    color: "bg-green-500",
    description: "Secure, decentralized payment gateway prototype built on Solana."
  }
];

/* --- COMPONENTS --- */

// 1. Status Bar (Time, Battery, Wifi)
const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-full flex justify-between items-center px-6 py-3 text-white text-xs font-medium z-50 mix-blend-overlay">
      <div className="flex items-center space-x-2">
        <span>{formatTime(time)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Signal size={14} />
        <Wifi size={14} />
        <div className="flex items-center space-x-1">
          <span>100%</span>
          <Battery size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
};

// 2. 3D App Icon
const AppIcon = ({ icon: Icon, label, color, link, onClick }: {icon: React.ElementType, label: string, color: string, link: string, onClick?: () => void}) => {
  return (
    <a 
      href={link} 
      onClick={onClick}
      className="group flex flex-col items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <div className={`
        relative w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl 
        bg-gradient-to-br ${color} 
        flex items-center justify-center 
        shadow-lg shadow-black/20 
        transform transition-all duration-500
        group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-${color.split('-')[1]}-500/40
        before:content-[''] before:absolute before:inset-0 before:bg-white/20 before:rounded-2xl before:opacity-0 group-hover:before:opacity-100 before:transition-opacity
      `}>
        <Icon className="text-white w-8 h-8 md:w-10 md:h-10 drop-shadow-md" strokeWidth={1.5} />
        {/* Glossy reflection effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl md:rounded-t-3xl pointer-events-none" />
      </div>
      <span className="text-xs md:text-sm text-white font-medium tracking-tight drop-shadow-md opacity-90 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
};

// 3. Project Card (Glassmorphism)
const ProjectCard = ({ project }: { project: typeof PROJECTS[0]}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md p-6 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-2xl ${project.color} shadow-lg shadow-black/10`}>
          <project.icon className="text-white w-6 h-6" />
        </div>
        <div className="bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="text-white w-4 h-4" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{project.title}</h3>
      <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider mb-3">{project.category}</p>
      <p className="text-sm text-white/80 leading-relaxed">{project.description}</p>
      
      {/* Hover Light Effect */}
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState(0); // 0 = Home, 1 = Work
  
  // Handle scroll/wheel for desktop
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50 && page === 0) setPage(1);
      if (e.deltaY < -50 && page === 1) setPage(0);
    };
    
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [page]);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;
    
    if (isUpSwipe && page === 0) setPage(1);
    if (isDownSwipe && page === 1) setPage(0);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black font-sans selection:bg-blue-500/30"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out scale-105"
        style={{ 
          backgroundImage: `url(${WALLPAPER_URL})`,
          filter: page === 1 ? 'blur(20px) brightness(0.6)' : 'blur(0px) brightness(1)'
        }}
      />
      
      {/* Overlay Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full flex flex-col">
        <StatusBar />

        {/* Dynamic Content Area with Slide Transition */}
        <div 
          className="flex-1 w-full relative transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ transform: `translateY(-${page * 100}%)` }}
        >
          
          {/* --- PAGE 1: HOME / IDENTITY --- */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col p-6 md:p-12">
            
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
                  <Terminal size={16} /> Full Stack Developer & AI Engineer
                </p>
              </div>
            </div>

            {/* App Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4 md:gap-8 max-w-4xl mx-auto pb-24 md:pb-32">
              {SOCIAL_LINKS.map((app) => (
                <AppIcon key={app.id} {...app} />
              ))}
            </div>

            {/* Dock (Desktop Only style visual, but functional on all) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center pb-safe">
               <div className="mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-4 flex gap-6 shadow-2xl">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-transform">
                    <Mail className="text-white" size={24} />
                 </div>
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-transform">
                    <Briefcase className="text-white" size={24} />
                 </div>
                 <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-transform">
                    <Github className="text-white" size={24} />
                 </div>
               </div>
            </div>

            {/* Swipe Indicator */}
            <div 
              className="absolute bottom-2 left-0 right-0 flex flex-col items-center justify-center cursor-pointer animate-bounce text-white/50 hover:text-white transition-colors"
              onClick={() => setPage(1)}
            >
              <span className="text-xs font-medium uppercase tracking-widest mb-1">Swipe Up</span>
              <ChevronUp size={24} />
            </div>
          </div>

          {/* --- PAGE 2: WORK / DEVELOPER --- */}
          <div className="absolute top-[100%] left-0 w-full h-full flex flex-col overflow-y-auto custom-scrollbar">
            
            <div className="w-full max-w-6xl mx-auto px-6 pt-20 pb-12">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Projects</h2>
                  <p className="text-white/60">Selected works & experiments</p>
                </div>
                <button 
                  onClick={() => setPage(0)}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-white"
                >
                  <ChevronUp className="rotate-180" size={24} />
                </button>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* Additional Section: Tech Stack */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'Three.js', 'Tailwind', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
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
    </div>
  );
}
