'use client';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  const CardContent = (
    <div className="group relative overflow-hidden rounded-[20px] p-10 transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full bg-[rgba(255,255,255,0.18)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.3)] shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:bg-[rgba(255,255,255,0.25)]">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-2xl ${project.color} shadow-lg shadow-black/10`}>
          <Icon className="text-white w-6 h-6" />
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

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
