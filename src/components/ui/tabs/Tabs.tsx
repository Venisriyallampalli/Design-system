import React, { createContext, useContext, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

// Tab variants
const tabsListVariants = cva(
  'inline-flex items-center justify-center rounded-md bg-surface-muted p-1',
  {
    variants: {
      variant: {
        default: 'bg-surface-muted',
        outline: 'bg-transparent border border-surface-border',
        pills: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Types
type TabsContextType = {
  value: string;
  onChange: (value: string) => void;
};

type TabsProps = {
  children: React.ReactNode;
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
};

type TabsListProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'pills';
};

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
};

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  value: string;
  className?: string;
};

// Context
const TabsContext = createContext<TabsContextType | null>(null);

// Hook to use Tabs context
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a Tabs component');
  }
  return context;
};

// Main Tabs component
export const Tabs = ({
  children,
  defaultValue,
  value,
  onValueChange,
  className,
  orientation = 'horizontal',
  ...props
}: TabsProps) => {
  const [tabValue, setTabValue] = useState(defaultValue);
  
  const currentValue = value !== undefined ? value : tabValue;
  
  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setTabValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onChange: handleChange }}>
      <div 
        className={cn(
          'w-full',
          orientation === 'vertical' ? 'flex flex-row gap-4' : 'flex flex-col gap-2',
          className
        )}
        data-orientation={orientation}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList component
export const TabsList = ({
  children,
  className,
  variant = 'default',
  ...props
}: TabsListProps) => {
  return (
    <div
      role="tablist"
      className={cn(
        tabsListVariants({ variant }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// TabsTrigger component
export const TabsTrigger = ({
  children,
  value,
  className,
  disabled,
  ...props
}: TabsTriggerProps) => {
  const { value: selectedValue, onChange } = useTabs();
  const isSelected = selectedValue === value;

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isSelected}
      data-state={isSelected ? 'active' : 'inactive'}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-surface-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'data-[state=active]:bg-surface-card data-[state=active]:text-primary-700 data-[state=active]:shadow-sm',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={() => onChange(value)}
      {...props}
    >
      {children}
    </button>
  );
};

// TabsContent component
export const TabsContent = ({
  children,
  value,
  className,
  ...props
}: TabsContentProps) => {
  const { value: selectedValue } = useTabs();
  const isSelected = selectedValue === value;

  return (
    <div
      role="tabpanel"
      hidden={!isSelected}
      data-state={isSelected ? 'active' : 'inactive'}
      className={cn(
        'mt-2 ring-offset-surface-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        isSelected ? 'animate-fade-in' : 'animate-fade-out',
        className
      )}
      {...props}
    >
      {isSelected && children}
    </div>
  );
};