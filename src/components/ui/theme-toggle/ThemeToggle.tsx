import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ThemeToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  darkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({
  darkMode,
  onToggle,
  className,
  ...props
}: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'p-2 rounded-md hover:bg-surface-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        className
      )}
      aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
      {...props}
    >
      {darkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};