import React, { createContext, useState, useContext, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, ChatContextType, ChatProviderProps } from '../types';
import { sendMessageToGemini } from '../services/gemini';

// Create the chat context
const ChatContext = createContext<ChatContextType>({
  messages: [],
  isLoading: false,
  sendMessage: async () => {},
  clearChat: () => {},
});

// Custom hook to use the chat context
export const useChat = () => useContext(ChatContext);

// Chat provider component
export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      content: "Hello! I'm AUROBOT, your personal health and wellness assistant. How can I help you today?",
      role: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Send a message to the chat
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Add user message to the chat
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get response from Gemini
      const botResponse = await sendMessageToGemini(content);
      
      // Add bot response to the chat
      const botMessage: Message = {
        id: uuidv4(),
        content: botResponse,
        role: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: uuidv4(),
        content: "I'm having trouble processing your request. Please try again later.",
        role: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Clear the chat
  const clearChat = useCallback(() => {
    setMessages([
      {
        id: uuidv4(),
        content: "Hello! I'm AUROBOT, your personal health and wellness assistant. How can I help you today?",
        role: 'bot',
        timestamp: new Date(),
      },
    ]);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, isLoading, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};