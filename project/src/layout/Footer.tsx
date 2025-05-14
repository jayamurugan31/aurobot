import React from 'react';
import { FooterProps } from '../types';
import { Heart } from 'lucide-react';

const Footer: React.FC<FooterProps> = ({ showDisclaimer = true }) => {
  return (
    <footer className="bg-white py-4 border-t border-neutral-200">
      <div className="container mx-auto px-4">
        {showDisclaimer && (
          <div className="mb-4 p-3 bg-neutral-50 rounded-lg text-sm text-neutral-600 border border-neutral-200">
            <p className="font-medium mb-1">Health Disclaimer</p>
            <p>
              AUROBOT provides general health information for educational purposes only. 
              It is not a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider 
              with any questions you may have regarding a medical condition.
            </p>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} AUROBOT - Your Personal Health Assistant</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 text-error-500 mx-1" /> for your wellbeing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;