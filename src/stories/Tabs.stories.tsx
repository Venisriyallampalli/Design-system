import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          Tabs organize content into different views where only one view is visible at a time.

          ## Accessibility
          - Uses appropriate ARIA roles (tablist, tab, tabpanel)
          - Proper keyboard navigation (left/right arrows)
          - Focus management for selected tabs
          - Proper activation using Space or Enter keys

          ## Best Practices
          - Keep tab labels short and clear
          - Use for content that can be clearly divided
          - Avoid too many tabs (5-7 maximum)
          - Don't nest tabs within tabs
          - Consider responsive behavior on small screens
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The initial active tab',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the tab to activate',
    },
    onValueChange: {
      action: 'changed',
      description: 'Callback when the active tab changes',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
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
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 rounded-md border border-surface-border mt-2">
          <h3 className="font-medium">Account Settings</h3>
          <p className="text-sm mt-1">Manage your account preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 rounded-md border border-surface-border mt-2">
          <h3 className="font-medium">Password Settings</h3>
          <p className="text-sm mt-1">Change your password here.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 rounded-md border border-surface-border mt-2">
          <h3 className="font-medium">General Settings</h3>
          <p className="text-sm mt-1">Configure your application settings.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  args: {
    defaultValue: 'tab1',
    orientation: 'vertical',
  },
  render: (args) => (
    <Tabs {...args} className="w-[500px]">
      <TabsList className="w-32">
        <TabsTrigger value="tab1" className="justify-start">Profile</TabsTrigger>
        <TabsTrigger value="tab2" className="justify-start">Notifications</TabsTrigger>
        <TabsTrigger value="tab3" className="justify-start">Security</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="tab1" className="m-0">
          <div className="p-4 rounded-md border border-surface-border">
            <h3 className="font-medium">Profile Settings</h3>
            <p className="text-sm mt-1">Manage your personal information.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2" className="m-0">
          <div className="p-4 rounded-md border border-surface-border">
            <h3 className="font-medium">Notification Preferences</h3>
            <p className="text-sm mt-1">Control your notification settings.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3" className="m-0">
          <div className="p-4 rounded-md border border-surface-border">
            <h3 className="font-medium">Security Settings</h3>
            <p className="text-sm mt-1">Manage your security preferences.</p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Available</TabsTrigger>
        <TabsTrigger value="tab2">Also Available</TabsTrigger>
        <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 rounded-md border border-surface-border mt-2">
          <h3 className="font-medium">First Tab Content</h3>
          <p className="text-sm mt-1">This tab is available.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 rounded-md border border-surface-border mt-2">
          <h3 className="font-medium">Second Tab Content</h3>
          <p className="text-sm mt-1">This tab is also available.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 rounded-md border border-surface-border mt-2">
          <h3 className="font-medium">Disabled Tab Content</h3>
          <p className="text-sm mt-1">This content should not be accessible.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Variants: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => (
    <div className="space-y-8 w-[400px]">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="default">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Outline</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="outline">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Pills</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="pills">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};