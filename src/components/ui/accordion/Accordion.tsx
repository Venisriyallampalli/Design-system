import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Types
type AccordionContextType = {
  expanded: string | null;
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>;
  allowMultiple: boolean;
};

type AccordionProps = {
  children: React.ReactNode;
  defaultValue?: string;
  allowMultiple?: boolean;
  className?: string;
};

type AccordionItemContextType = {
  isExpanded: boolean;
  itemId: string;
};

type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
};

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};

// Contexts
const AccordionContext = createContext<AccordionContextType | null>(null);
const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

// Hook to use Accordion context
const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion component');
  }
  return context;
};

// Hook to use AccordionItem context
const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('useAccordionItem must be used within an AccordionItem component');
  }
  return context;
};

// Main Accordion component
export const Accordion = ({
  children,
  defaultValue,
  allowMultiple = false,
  className,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState<string | null>(defaultValue || null);

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded, allowMultiple }}>
      <div className={cn('divide-y divide-surface-border rounded-md border border-surface-border', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// AccordionItem component
export const AccordionItem = ({
  children,
  value,
  className,
  disabled = false,
}: AccordionItemProps) => {
  const { expanded, setExpanded, allowMultiple } = useAccordion();
  
  const isExpanded = expanded === value || (allowMultiple && typeof expanded === 'string' && expanded.split(',').includes(value));

  const toggleItem = () => {
    if (disabled) return;
    
    if (allowMultiple) {
      setExpanded((prev) => {
        const values = prev ? prev.split(',') : [];
        if (values.includes(value)) {
          return values.filter(v => v !== value).join(',') || null;
        } else {
          return [...values, value].join(',');
        }
      });
    } else {
      setExpanded((prev) => (prev === value ? null : value));
    }
  };

  return (
    <AccordionItemContext.Provider value={{ isExpanded, itemId: value }}>
      <div 
        className={cn(
          'py-2 transition-colors',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        data-state={isExpanded ? 'expanded' : 'collapsed'}
        data-disabled={disabled}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AccordionTrigger) {
            return React.cloneElement(child as React.ReactElement<AccordionTriggerProps>, {
              onClick: toggleItem,
            });
          }
          return child;
        })}
      </div>
    </AccordionItemContext.Provider>
  );
};

// AccordionTrigger component
export const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionTriggerProps & React.HTMLAttributes<HTMLButtonElement>) => {
  const { isExpanded } = useAccordionItem();

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between px-4 py-2 text-left font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md',
        className
      )}
      aria-expanded={isExpanded}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-4 w-4 shrink-0 text-surface-foreground transition-transform duration-200',
          isExpanded && 'rotate-180'
        )}
        aria-hidden="true"
      />
    </button>
  );
};

// AccordionContent component
export const AccordionContent = ({
  children,
  className,
}: AccordionContentProps) => {
  const { isExpanded } = useAccordionItem();

  return (
    <div
      className={cn(
        'overflow-hidden transition-all data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in',
        isExpanded ? 'data-[state=open]:max-h-[500px]' : 'data-[state=closed]:max-h-0',
        className
      )}
      data-state={isExpanded ? 'open' : 'closed'}
      aria-hidden={!isExpanded}
    >
      <div className="px-4 pb-4 pt-0">{children}</div>
    </div>
  );
};