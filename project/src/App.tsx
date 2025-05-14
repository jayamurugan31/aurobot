import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ChatInterface from './components/ChatInterface';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="flex flex-col min-h-screen">
        <Header title="AUROBOT" />
        
        <main className="container mx-auto px-4 py-6 flex-1">
          <section className="max-w-2xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-2">
                Your Personalized Health & Wellness Assistant
              </h2>
              <p className="text-neutral-600">
                Ask me anything about health, nutrition, fitness, mental well-being, and more.
                I'm here to provide you with personalized guidance on your wellness journey.
              </p>
            </div>
            
            <ChatInterface />
          </section>
        </main>
        
        <Footer />
      </div>
    </ChatProvider>
  );
}

export default App;