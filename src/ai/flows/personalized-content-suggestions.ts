'use server';

/**
 * @fileOverview Provides personalized content suggestions based on the referral link.
 *
 * - suggestContent - A function that suggests content for the webpage based on the referral link.
 * - SuggestContentInput - The input type for the suggestContent function.
 * - SuggestContentOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  referralLink: z.string().describe('The referral link used to arrive at the webpage.'),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of content suggestions relevant to the user.'),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are an AI assistant that provides personalized content suggestions for a webpage.
  Based on the referral link the user used to arrive at the webpage, suggest content that would be most relevant and interesting to them.
  Return a list of content suggestions as strings.

  Referral Link: {{{referralLink}}}
  Suggestions:`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
