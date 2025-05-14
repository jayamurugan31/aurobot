import React from 'react';
import { TypingIndicatorProps } from '../types';
import Avatar from './Avatar';

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ visible }) => {
  if (!visible) return null;
  
  return (
    <div className="flex gap-2 mb-4">
      <Avatar type="bot" />
      <div className="message-bubble bg-white text-neutral-800 mr-auto shadow">
        <div className="typing-indicator">
          <div className="typing-dot bg-primary-500"></div>
          <div className="typing-dot bg-primary-500"></div>
          <div className="typing-dot bg-primary-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;