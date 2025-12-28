import type { SummarizeAiProjectsInput } from '@/ai/flows/summarize-ai-projects';

export const projectsData: SummarizeAiProjectsInput = [
  {
    title: 'GenAI Web App Generator',
    description: 'A platform that uses generative AI to create full-stack web applications from a simple prompt. It handles everything from UI design to backend logic and database schema.',
    features: ['AI-powered code generation', 'Customizable templates', 'Real-time preview', 'Database integration'],
  },
  {
    title: 'Personalized Content Engine',
    description: 'An AI-driven system that analyzes user behavior and referral data to dynamically personalize website content, improving engagement and conversion rates.',
    features: ['Real-time personalization', 'A/B testing for suggestions', 'Integration with analytics platforms', 'Content suggestion API'],
  },
  {
    title: 'PrashantGPT',
    description: 'An AI chatbot assistant powered by Google\'s Gemini model, trained to answer questions about Prashant Bhatt\'s professional background, skills, and projects.',
    features: ['Natural Language Understanding', 'Context-aware responses', 'Extensible knowledge base', 'Interactive chat interface'],
  }
];
