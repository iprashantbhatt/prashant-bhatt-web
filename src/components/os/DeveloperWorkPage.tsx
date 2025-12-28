'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/projects';
import { summarizeAiProjects, type SummarizeAiProjectsOutput } from '@/ai/flows/summarize-ai-projects';
import ProjectCard from './ProjectCard';
import { Skeleton } from '@/components/ui/skeleton';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type DeveloperWorkPageProps = {
  onGoHome: () => void;
};

export default function DeveloperWorkPage({ onGoHome }: DeveloperWorkPageProps) {
  const [summaries, setSummaries] = useState<SummarizeAiProjectsOutput>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    summarizeAiProjects(projectsData)
      .then((res) => {
        setSummaries(res);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const projectsWithSummaries = projectsData.map((project, index) => {
    const summary = summaries.find(s => s.title === project.title);
    return {
      ...project,
      summary: summary?.summary,
      image: PlaceHolderImages.find(p => p.id === `project-${index + 1}`),
    };
  });

  return (
    <div className="h-full w-full bg-background/80 backdrop-blur-xl text-foreground flex flex-col">
      <header className="flex-shrink-0 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Developer Work</h1>
        <Button variant="ghost" size="icon" onClick={onGoHome}>
          <ArrowDown className="w-5 h-5" />
        </Button>
      </header>
      <div className="flex-grow overflow-y-auto px-4 pb-20">
        <div className="space-y-6">
          <p className="text-muted-foreground">
            A selection of my recent projects, featuring AI-generated summaries for a quick overview.
          </p>
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 space-y-3">
                  <Skeleton className="h-40 w-full rounded-md" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))
            : projectsWithSummaries.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
        </div>
      </div>
    </div>
  );
}
