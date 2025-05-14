import React from 'react';
import { ChatMessageProps } from '../types';
import Avatar from './Avatar';
import ReactMarkdown from 'react-markdown';

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(message.timestamp);

  return (
    <div className={`flex gap-2 mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      {message.role === 'bot' && <Avatar type="bot" />}
      
      <div className={message.role === 'user' ? 'message-user' : 'message-bot'}>
        {message.role === 'bot' ? (
          <div className="prose prose-sm">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ) : (
          <p>{message.content}</p>
        )}
        <div className={`text-xs mt-1 ${message.role === 'user' ? 'text-primary-200' : 'text-neutral-400'}`}>
          {formattedTime}
        </div>
      </div>
      
      {message.role === 'user' && <Avatar type="user" />}
    </div>
  );
};

export default ChatMessage;