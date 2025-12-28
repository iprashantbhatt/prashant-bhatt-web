'use server';

/**
 * @fileOverview An AI chatbot that answers questions about Prashant Bhatt.
 *
 * - prashantGptAssistant - A function that handles the chatbot interactions.
 * - PrashantGptAssistantInput - The input type for the prashantGptAssistant function.
 * - PrashantGptAssistantOutput - The return type for the prashantGptAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrashantGptAssistantInputSchema = z.object({
  query: z.string().describe('The user query about Prashant Bhatt.'),
});
export type PrashantGptAssistantInput = z.infer<typeof PrashantGptAssistantInputSchema>;

const PrashantGptAssistantOutputSchema = z.object({
  answer: z.string().describe('The AI chatbot response to the user query.'),
});
export type PrashantGptAssistantOutput = z.infer<typeof PrashantGptAssistantOutputSchema>;

export async function prashantGptAssistant(input: PrashantGptAssistantInput): Promise<PrashantGptAssistantOutput> {
  return prashantGptAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prashantGptAssistantPrompt',
  input: {schema: PrashantGptAssistantInputSchema},
  output: {schema: PrashantGptAssistantOutputSchema},
  prompt: `You are a helpful AI assistant named PrashantGPT. Your purpose is to answer questions about Prashant Bhatt's work, experience, and interests. Use the following information to provide accurate and informative answers to the user's query. If the query is not related to Prashant Bhatt, politely decline to answer.

User Query: {{{query}}}
`,
});

const prashantGptAssistantFlow = ai.defineFlow(
  {
    name: 'prashantGptAssistantFlow',
    inputSchema: PrashantGptAssistantInputSchema,
    outputSchema: PrashantGptAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
