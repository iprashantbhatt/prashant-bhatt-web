'use client';
import Image from 'next/image';
import type { SummarizeAiProjectsInput } from '@/ai/flows/summarize-ai-projects';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Project = SummarizeAiProjectsInput[0] & {
    summary?: string;
    image?: ImagePlaceholder;
}

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-white/30 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-2 overflow-hidden">
      {project.image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            width={600}
            height={400}
            className="object-cover w-full h-full"
            data-ai-hint={project.image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-foreground/80 pt-1">
            {project.summary || project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
            {project.features.map(feature => (
                <Badge key={feature} variant="secondary">{feature}</Badge>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
