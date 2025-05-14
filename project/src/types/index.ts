export interface Message {
  id: string;
  content: string;
  role: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatContextType {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
}

export interface ChatProviderProps {
  children: React.ReactNode;
}

export interface ChatMessageProps {
  message: Message;
}

export interface ChatInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

export interface HealthTopic {
  id: string;
  title: string;
  prompt: string;
  icon: string;
}

export interface HealthTopicsProps {
  onSelectTopic: (prompt: string) => void;
}

export interface HeaderProps {
  title: string;
}

export interface FooterProps {
  showDisclaimer?: boolean;
}

export interface TypingIndicatorProps {
  visible: boolean;
}

export interface AvatarProps {
  type: 'user' | 'bot';
}