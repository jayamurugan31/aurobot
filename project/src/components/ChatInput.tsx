import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { ChatInputProps } from '../types';

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Auto-focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
      // Refocus input after sending
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const clearInput = () => {
    setMessage('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-3 border-t border-neutral-200 rounded-b-xl sticky bottom-0"
    >
      <div className="relative flex items-center">
        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Type your health question..."
          className="input pr-24 min-h-[52px] max-h-36 py-3 resize-none"
          rows={1}
        />
        
        <div className="absolute right-2 flex gap-1">
          {message.length > 0 && (
            <button
              type="button"
              onClick={clearInput}
              className="p-2 text-neutral-500 hover:text-neutral-700 transition-colors"
              aria-label="Clear message"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className={`btn-primary !py-1 !px-3 ${
              (!message.trim() || disabled) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;