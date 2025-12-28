import { Cpu, Layers, Zap, Smartphone, LucideIcon } from 'lucide-react';

export type Project = {
    id: number;
    title: string;
    category: string;
    icon: LucideIcon;
    color: string;
    description: string;
}

export const projectsData: Project[] = [
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
