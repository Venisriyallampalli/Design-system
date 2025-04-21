import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../components/ui/tag';
import { Bell, Check, AlertCircle, Info } from 'lucide-react';

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          Tags are compact elements that represent an input, attribute, or action. They may display text, icons, or both.

          ## Accessibility
          - Removable tags have proper aria-labels
          - Focus styles for interactive states
          - Proper color contrast for all variants

          ## Best Practices
          - Keep text content short and concise
          - Use appropriate colors for semantic meaning
          - Provide clear affordance for interactive tags
          - Ensure sufficient space between multiple tags
          - Consider providing a tooltip for truncated content
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'tertiary', 'success', 'warning', 'error', 'outline'],
      description: 'The visual style variant of the tag',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tag',
    },
    onRemove: {
      action: 'removed',
      description: 'Callback function when remove button is clicked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled',
    },
    icon: {
      description: 'Icon to display before the tag text',
    },
    children: {
      control: 'text',
      description: 'The content of the tag',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
    variant: 'default',
    size: 'md',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="tertiary">Tertiary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="outline">Outline</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Tag icon={<Check className="h-3 w-3" />} variant="success">Completed</Tag>
      <Tag icon={<AlertCircle className="h-3 w-3" />} variant="error">Error</Tag>
      <Tag icon={<Info className="h-3 w-3" />} variant="secondary">Info</Tag>
      <Tag icon={<Bell className="h-3 w-3" />} variant="warning">Notification</Tag>
    </div>
  ),
};

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag onRemove={() => console.log('Tag removed')}>Removable</Tag>
      <Tag variant="secondary" onRemove={() => console.log('Tag removed')}>Close Me</Tag>
      <Tag variant="success" onRemove={() => console.log('Tag removed')}>Success</Tag>
      <Tag variant="error" onRemove={() => console.log('Tag removed')}>Error</Tag>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag disabled>Disabled Tag</Tag>
      <Tag disabled onRemove={() => console.log('This will not be called')}>Disabled Removable</Tag>
      <Tag disabled variant="success">Disabled Success</Tag>
      <Tag disabled variant="error">Disabled Error</Tag>
    </div>
  ),
};