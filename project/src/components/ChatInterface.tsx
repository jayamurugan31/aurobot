import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import HealthTopics from './HealthTopics';
import { useChat } from '../context/ChatContext';
import { PanelLeft, RefreshCcw } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showTopics, setShowTopics] = React.useState(false);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTopicSelect = (prompt: string) => {
    sendMessage(prompt);
    setShowTopics(false);
  };

  const toggleTopics = () => {
    setShowTopics(!showTopics);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl overflow-hidden shadow-lg">
      {/* Chat Header */}
      <div className="bg-white p-3 border-b border-neutral-200 flex justify-between items-center">
        <button
          className="btn-ghost !p-2"
          onClick={toggleTopics}
          aria-label="Show health topics"
        >
          <PanelLeft size={20} />
        </button>
        
        <div className="text-center">
          <h2 className="text-lg font-semibold text-neutral-800">Health Chat</h2>
        </div>
        
        <button
          className="btn-ghost !p-2"
          onClick={clearChat}
          aria-label="Clear chat"
        >
          <RefreshCcw size={20} />
        </button>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {showTopics && <HealthTopics onSelectTopic={handleTopicSelect} />}
        
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        <TypingIndicator visible={isLoading} />
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat Input */}
      <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatInterface;