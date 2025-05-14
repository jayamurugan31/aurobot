import React from 'react';
import { healthTopics, getIconComponent } from '../data/healthTopics';
import { HealthTopicsProps } from '../types';

const HealthTopics: React.FC<HealthTopicsProps> = ({ onSelectTopic }) => {
  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold mb-3 text-neutral-700">Health Topics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {healthTopics.map((topic) => {
          const IconComponent = getIconComponent(topic.icon);
          
          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.prompt)}
              className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-neutral-200 hover:border-primary-300 hover:shadow transition-all duration-200"
            >
              <div className="w-8 h-8 flex items-center justify-center text-primary-500 mb-2">
                <IconComponent size={22} />
              </div>
              <span className="text-sm text-center">{topic.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HealthTopics;