import React from 'react';
import { Layers } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75"></div>
        <div className="relative bg-gray-900 p-1.5 rounded-full">
          <Layers size={24} className="text-indigo-400" />
        </div>
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        TemplateForge
      </span>
    </div>
  );
};

export default Logo;