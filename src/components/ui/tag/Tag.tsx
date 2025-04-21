import React from 'react';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

// Tag variants using class-variance-authority
const tagVariants = cva(
  'inline-flex items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-100 text-primary-800 border-primary-200 hover:bg-primary-200',
        secondary: 'bg-secondary-100 text-secondary-800 border-secondary-200 hover:bg-secondary-200',
        tertiary: 'bg-tertiary-100 text-tertiary-800 border-tertiary-200 hover:bg-tertiary-200',
        success: 'bg-success-100 text-success-800 border-success-200 hover:bg-success-200',
        warning: 'bg-warning-100 text-warning-800 border-warning-200 hover:bg-warning-200',
        error: 'bg-error-100 text-error-800 border-error-200 hover:bg-error-200',
        outline: 'bg-transparent border-surface-border text-surface-foreground hover:bg-surface-muted',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface TagProps 
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, onRemove, disabled, icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          tagVariants({ variant, size }),
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        data-disabled={disabled}
        {...props}
      >
        {icon && <span className="mr-1.5 -ml-0.5">{icon}</span>}
        {children}
        {onRemove && !disabled && (
          <button
            type="button"
            className="ml-1.5 -mr-0.5 h-4 w-4 rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            aria-label="Remove tag"
            disabled={disabled}
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';