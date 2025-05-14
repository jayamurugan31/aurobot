import React from 'react';
import { Bot, User } from 'lucide-react';
import { AvatarProps } from '../types';

const Avatar: React.FC<AvatarProps> = ({ type }) => {
  return (
    <div 
      className={`flex items-center justify-center w-8 h-8 rounded-full ${
        type === 'bot' 
          ? 'bg-gradient-to-br from-secondary-500 to-primary-500' 
          : 'bg-accent-500'
      }`}
    >
      {type === 'bot' ? (
        <Bot className="w-5 h-5 text-white" />
      ) : (
        <User className="w-5 h-5 text-white" />
      )}
    </div>
  );
};

export default Avatar;