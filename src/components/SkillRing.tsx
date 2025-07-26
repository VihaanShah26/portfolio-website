import { useState, useEffect } from 'react';

interface SkillRingProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: React.ReactNode;
  category?: string;
}

const levelToPercentage = {
  'Beginner': 25,
  'Intermediate': 50,
  'Advanced': 75,
  'Expert': 90,
};

const levelColors = {
  'Beginner': 'text-blue-500',
  'Intermediate': 'text-green-500',
  'Advanced': 'text-orange-500',
  'Expert': 'text-purple-500',
};

export const SkillRing = ({ name, level, icon, category }: SkillRingProps) => {
  const [animated, setAnimated] = useState(false);
  const percentage = levelToPercentage[level];
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-3 p-4">
      {/* Ring Chart */}
      <div className="relative w-24 h-24">
        <svg
          className="transform -rotate-90 w-full h-full"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/30"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-primary transition-all duration-1000 ease-out"
            strokeDasharray={circumference}
            strokeDashoffset={animated ? strokeDashoffset : circumference}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {icon ? (
            <div className="text-primary">{icon}</div>
          ) : (
            <span className="text-sm font-semibold text-primary">
              {percentage}%
            </span>
          )}
        </div>
      </div>

      {/* Skill info */}
      <div className="text-center space-y-1">
        <h3 className="font-medium text-sm">{name}</h3>
        <span className={`text-xs ${levelColors[level]}`}>
          {level}
        </span>
      </div>
    </div>
  );
};