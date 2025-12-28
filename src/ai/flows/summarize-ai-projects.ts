'use server';

/**
 * @fileOverview A flow for summarizing AI projects.
 *
 * - summarizeAiProjects - A function that summarizes the given AI projects.
 * - SummarizeAiProjectsInput - The input type for the summarizeAiProjects function.
 * - SummarizeAiProjectsOutput - The return type for the summarizeAiProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAiProjectsInputSchema = z.array(
  z.object({
    title: z.string().describe('The title of the AI project.'),
    description: z.string().describe('A detailed description of the AI project.'),
    features: z.array(z.string()).describe('A list of key features of the AI project.'),
  })
).describe('An array of AI project objects to summarize.');

export type SummarizeAiProjectsInput = z.infer<typeof SummarizeAiProjectsInputSchema>;

const SummarizeAiProjectsOutputSchema = z.array(
  z.object({
    title: z.string().describe('The title of the AI project.'),
    summary: z.string().describe('A concise, AI-generated summary of the AI project.'),
  })
).describe('An array of AI project summaries.');

export type SummarizeAiProjectsOutput = z.infer<typeof SummarizeAiProjectsOutputSchema>;

export async function summarizeAiProjects(input: SummarizeAiProjectsInput): Promise<SummarizeAiProjectsOutput> {
  return summarizeAiProjectsFlow(input);
}

const projectSummaryPrompt = ai.definePrompt({
  name: 'projectSummaryPrompt',
  input: { schema: SummarizeAiProjectsInputSchema.element },
  output: { schema: z.object({ summary: z.string() }) },
  prompt: `Summarize the following AI project in one sentence, focusing on its purpose and key features:\n\nTitle: {{{title}}}\nDescription: {{{description}}}\nFeatures: {{#each features}}- {{{this}}}\n{{/each}}`,
});

const summarizeAiProjectsFlow = ai.defineFlow(
  {
    name: 'summarizeAiProjectsFlow',
    inputSchema: SummarizeAiProjectsInputSchema,
    outputSchema: SummarizeAiProjectsOutputSchema,
  },
  async input => {
    const summaries = await Promise.all(
      input.map(async project => {
        const { output } = await projectSummaryPrompt(project);
        return {
          title: project.title,
          summary: output!.summary,
        };
      })
    );
    return summaries;
  }
);
