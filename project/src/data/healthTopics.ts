import { HealthTopic } from '../types';
import { Heart, Drumstick, Brain, Zap, Utensils, Moon, Dumbbell, Smile } from 'lucide-react';

export const healthTopics: HealthTopic[] = [
  {
    id: 'heart-health',
    title: 'Heart Health',
    prompt: 'What are the best ways to improve heart health?',
    icon: 'Heart'
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    prompt: 'Can you give me some healthy eating tips?',
    icon: 'Utensils'
  },
  {
    id: 'mental-health',
    title: 'Mental Health',
    prompt: 'How can I reduce stress and anxiety naturally?',
    icon: 'Brain'
  },
  {
    id: 'fitness',
    title: 'Fitness',
    prompt: 'What exercises are best for beginners?',
    icon: 'Dumbbell'
  },
  {
    id: 'sleep',
    title: 'Sleep',
    prompt: 'How can I improve my sleep quality?',
    icon: 'Moon'
  },
  {
    id: 'energy',
    title: 'Energy',
    prompt: 'How can I boost my energy levels naturally?',
    icon: 'Zap'
  },
  {
    id: 'diet',
    title: 'Diet Plans',
    prompt: 'What diet would you recommend for weight loss?',
    icon: 'Drumstick'
  },
  {
    id: 'wellbeing',
    title: 'Well-being',
    prompt: 'What are some daily habits for overall well-being?',
    icon: 'Smile'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return Heart;
    case 'Drumstick': return Drumstick;
    case 'Brain': return Brain;
    case 'Zap': return Zap;
    case 'Utensils': return Utensils;
    case 'Moon': return Moon;
    case 'Dumbbell': return Dumbbell;
    case 'Smile': return Smile;
    default: return Heart;
  }
};