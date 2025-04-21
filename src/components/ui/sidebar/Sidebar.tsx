import React, { createContext, useContext, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Types
type SidebarContextType = {
  expanded: boolean;
  toggleExpanded: () => void;
  activeItem: string;
  setActiveItem: (id: string) => void;
};

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  defaultActiveItem?: string;
  position?: 'left' | 'right';
  onExpandedChange?: (expanded: boolean) => void;
};

type SidebarHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

type SidebarFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

type SidebarContentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

type SidebarItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  id: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
};

type SidebarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  title?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
};

type SidebarTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

// Context
const SidebarContext = createContext<SidebarContextType | null>(null);

// Hook to use Sidebar context
const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a Sidebar component');
  }
  return context;
};

// Main Sidebar component
export const Sidebar = ({
  children,
  className,
  defaultExpanded = true,
  defaultActiveItem = '',
  position = 'left',
  onExpandedChange,
  ...props
}: SidebarProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [activeItem, setActiveItem] = useState(defaultActiveItem);

  const toggleExpanded = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onExpandedChange?.(newExpanded);
  };

  return (
    <SidebarContext.Provider
      value={{
        expanded,
        toggleExpanded,
        activeItem,
        setActiveItem,
      }}
    >
      <div
        className={cn(
          'flex h-screen flex-col bg-surface-card text-surface-foreground border-surface-border transition-all duration-300',
          expanded ? 'w-64' : 'w-16',
          position === 'left' ? 'border-r' : 'border-l',
          className
        )}
        data-expanded={expanded}
        data-position={position}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

// SidebarHeader component
export const SidebarHeader = ({
  children,
  className,
  ...props
}: SidebarHeaderProps) => {
  const { expanded } = useSidebar();

  return (
    <div
      className={cn(
        'flex h-16 items-center px-4 border-b border-surface-border',
        expanded ? 'justify-between' : 'justify-center',
        className
      )}
      {...props}
    >
      {expanded ? (
        children
      ) : (
        <div className="flex items-center justify-center">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && typeof child.type === 'function' && child.type.name === 'SidebarLogo') {
              return child;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

// SidebarTrigger component
export const SidebarTrigger = ({
  className,
  ...props
}: SidebarTriggerProps) => {
  const { expanded, toggleExpanded } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleExpanded}
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary-500',
        className
      )}
      aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
      {...props}
    >
      {expanded ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </button>
  );
};

// SidebarContent component
export const SidebarContent = ({
  children,
  className,
  ...props
}: SidebarContentProps) => {
  return (
    <div
      className={cn('flex-1 overflow-y-auto py-2', className)}
      {...props}
    >
      {children}
    </div>
  );
};

// SidebarFooter component
export const SidebarFooter = ({
  children,
  className,
  ...props
}: SidebarFooterProps) => {
  const { expanded } = useSidebar();

  return (
    <div
      className={cn(
        'border-t border-surface-border py-2 px-4',
        expanded ? '' : 'flex justify-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// SidebarItem component
export const SidebarItem = ({
  children,
  className,
  id,
  icon,
  badge,
  disabled = false,
  ...props
}: SidebarItemProps) => {
  const { expanded, activeItem, setActiveItem } = useSidebar();

  const isActive = activeItem === id;

  const handleClick = () => {
    if (!disabled) {
      setActiveItem(id);
    }
  };

  return (
    <div
      className={cn(
        'group flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary-100 text-primary-700'
          : 'text-surface-foreground hover:bg-surface-muted',
        disabled && 'cursor-not-allowed opacity-50',
        !expanded && 'justify-center',
        className
      )}
      onClick={handleClick}
      data-active={isActive}
      data-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      {...props}
    >
      {icon && (
        <div className={cn('flex h-5 w-5 items-center justify-center', expanded && 'mr-2')}>
          {icon}
        </div>
      )}
      {expanded && <span className="flex-1">{children}</span>}
      {expanded && badge && <div className="ml-auto">{badge}</div>}
    </div>
  );
};

// SidebarGroup component
export const SidebarGroup = ({
  children,
  className,
  title,
  collapsible = false,
  defaultCollapsed = false,
  ...props
}: SidebarGroupProps) => {
  const { expanded } = useSidebar();
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const toggleCollapsed = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className={cn('py-1', className)} {...props}>
      {title && expanded && (
        <div
          className={cn(
            'flex items-center px-3 py-1.5 text-xs font-semibold text-surface-foreground/70',
            collapsible && 'cursor-pointer hover:text-surface-foreground'
          )}
          onClick={toggleCollapsed}
        >
          {title}
          {collapsible && (
            <ChevronRight
              className={cn(
                'ml-auto h-4 w-4 transition-transform',
                !isCollapsed && 'rotate-90'
              )}
            />
          )}
        </div>
      )}
      <div className={cn(
        'space-y-1 overflow-hidden transition-all',
        isCollapsed && 'h-0'
      )}>
        {children}
      </div>
    </div>
  );
};

// SidebarLogo component for the custom icon/logo component
export const SidebarLogo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center">
      {children}
    </div>
  );
};