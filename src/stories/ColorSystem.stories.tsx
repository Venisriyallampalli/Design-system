import type { Meta, StoryObj } from '@storybook/react';

// A simple component to showcase our color system
const ColorSystem = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Enterprise Design System Colors</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Primary Colors</h3>
          <div className="grid grid-cols-5 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`primary-${shade}`} className="space-y-1">
                <div 
                  className={`h-12 rounded-md bg-primary-${shade}`} 
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
                ></div>
                <div className="text-xs font-mono">primary-{shade}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Secondary Colors</h3>
          <div className="grid grid-cols-5 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`secondary-${shade}`} className="space-y-1">
                <div 
                  className={`h-12 rounded-md bg-secondary-${shade}`} 
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
                ></div>
                <div className="text-xs font-mono">secondary-{shade}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Tertiary Colors</h3>
          <div className="grid grid-cols-5 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`tertiary-${shade}`} className="space-y-1">
                <div 
                  className={`h-12 rounded-md bg-tertiary-${shade}`} 
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
                ></div>
                <div className="text-xs font-mono">tertiary-{shade}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Semantic Colors</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Success</h4>
              <div className="grid grid-cols-2 gap-2">
                {[100, 300, 500, 700, 900].map((shade) => (
                  <div key={`success-${shade}`} className="space-y-1">
                    <div 
                      className={`h-12 rounded-md bg-success-${shade}`} 
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
                    ></div>
                    <div className="text-xs font-mono">success-{shade}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Warning</h4>
              <div className="grid grid-cols-2 gap-2">
                {[100, 300, 500, 700, 900].map((shade) => (
                  <div key={`warning-${shade}`} className="space-y-1">
                    <div 
                      className={`h-12 rounded-md bg-warning-${shade}`} 
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
                    ></div>
                    <div className="text-xs font-mono">warning-{shade}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Error</h4>
              <div className="grid grid-cols-2 gap-2">
                {[100, 300, 500, 700, 900].map((shade) => (
                  <div key={`error-${shade}`} className="space-y-1">
                    <div 
                      className={`h-12 rounded-md bg-error-${shade}`} 
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
                    ></div>
                    <div className="text-xs font-mono">error-{shade}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Neutral Colors</h3>
          <div className="grid grid-cols-5 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`neutral-${shade}`} className="space-y-1">
                <div 
                  className={`h-12 rounded-md bg-neutral-${shade}`} 
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
                ></div>
                <div className="text-xs font-mono">neutral-{shade}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Surface Colors</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="p-4 bg-surface-background border border-surface-border rounded-md">
                <div className="font-mono text-sm">surface-background</div>
              </div>
              <div className="p-4 bg-surface-card border border-surface-border rounded-md">
                <div className="font-mono text-sm">surface-card</div>
              </div>
              <div className="p-4 bg-surface-muted border border-surface-border rounded-md">
                <div className="font-mono text-sm">surface-muted</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-4 border border-surface-border rounded-md">
                <div className="font-mono text-sm">surface-border</div>
              </div>
              <div className="p-4 bg-surface-primary text-white rounded-md">
                <div className="font-mono text-sm">surface-primary</div>
              </div>
              <div className="p-4 bg-surface-secondary text-white rounded-md">
                <div className="font-mono text-sm">surface-secondary</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Theming Support</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-card border border-surface-border rounded-md space-y-2">
              <div className="font-medium">Light Theme (Default)</div>
              <div className="flex space-x-2">
                <div className="h-8 w-8 rounded-md bg-surface-background"></div>
                <div className="h-8 w-8 rounded-md bg-surface-foreground"></div>
                <div className="h-8 w-8 rounded-md bg-surface-card"></div>
                <div className="h-8 w-8 rounded-md bg-surface-muted"></div>
                <div className="h-8 w-8 rounded-md bg-surface-primary"></div>
              </div>
            </div>
            <div className="p-4 bg-neutral-900 text-white rounded-md space-y-2">
              <div className="font-medium">Dark Theme (Preview)</div>
              <div className="flex space-x-2">
                <div className="h-8 w-8 rounded-md bg-neutral-950"></div>
                <div className="h-8 w-8 rounded-md bg-neutral-50"></div>
                <div className="h-8 w-8 rounded-md bg-neutral-900"></div>
                <div className="h-8 w-8 rounded-md bg-neutral-800"></div>
                <div className="h-8 w-8 rounded-md bg-primary-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-medium">Accessibility Notes</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>All color combinations meet WCAG 2.1 AA standards for contrast (4.5:1 for normal text, 3:1 for large text)</li>
          <li>Each color has a sufficient range of shades to ensure proper contrast in various scenarios</li>
          <li>Semantic colors (success, warning, error) are chosen to be distinguishable for users with color vision deficiencies</li>
          <li>Dark theme maintains appropriate contrast ratios for all text elements</li>
        </ul>
        
        <h3 className="text-lg font-medium">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Primary colors should be used for main actions, focus states, and primary UI elements</li>
          <li>Secondary colors work well for less prominent actions and complementary UI elements</li>
          <li>Tertiary colors can be used for accents and visual interest</li>
          <li>Use semantic colors consistently (success for positive, warning for caution, error for negative)</li>
          <li>Neutral colors form the foundation of your interface - use them for text, backgrounds, and borders</li>
          <li>Maintain a consistent color hierarchy across the application</li>
        </ul>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundation/Color System',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
          The color system provides a comprehensive set of colors to create a consistent visual language across the application.
          
          ## Token-based System
          Our colors are defined as CSS variables, making them easily customizable and maintainable.
          
          ## Color Categories
          - **Primary**: Main brand colors, used for primary actions and emphasis
          - **Secondary**: Complementary colors for secondary actions and UI elements
          - **Tertiary**: Additional accent colors for visual interest
          - **Semantic**: Purpose-driven colors that communicate meaning
            - Success (green): Positive actions, completion, success states
            - Warning (amber): Caution, important notices, alerts
            - Error (red): Errors, destructive actions, critical information
          - **Neutral**: Grayscale colors for text, backgrounds, and borders
          - **Surface**: Colors for different UI surface layers

          ## Accessibility
          All color combinations are tested to ensure they meet WCAG 2.1 AA standards for contrast ratios.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => <ColorSystem />,
};