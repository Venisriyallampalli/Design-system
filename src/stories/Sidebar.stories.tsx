import type { Meta, StoryObj } from '@storybook/react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
  SidebarTrigger,
  SidebarLogo
} from '../components/ui/sidebar';
import { 
  Home, 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Zap 
} from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
          Sidebar navigation provides a way to navigate between different sections or pages of a website or application.

          ## Accessibility
          - Supports keyboard navigation
          - Properly manages focus when expanded/collapsed
          - Uses appropriate ARIA attributes for navigation states
          - Provides visible focus states

          ## Best Practices
          - Group related items together
          - Highlight the current section
          - Collapse to icons on small screens
          - Provide clear visual hierarchy
          - Use consistent icons for better recognition
          - Consider keyboard and screen reader users
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultExpanded: {
      control: 'boolean',
      description: 'Whether the sidebar is expanded by default',
    },
    defaultActiveItem: {
      control: 'text',
      description: 'The ID of the initially active item',
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'The position of the sidebar',
    },
    onExpandedChange: {
      action: 'expandedChanged',
      description: 'Callback when expanded state changes',
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
    defaultExpanded: true,
    defaultActiveItem: 'dashboard',
    position: 'left',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <div className="h-[500px] flex">
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center">
            <SidebarLogo>
              <Zap className="h-6 w-6 text-primary-500" />
            </SidebarLogo>
            <span className="ml-2 text-xl font-bold">AppName</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem id="home" icon={<Home className="h-5 w-5" />}>
              Home
            </SidebarItem>
            <SidebarItem id="dashboard" icon={<LayoutDashboard className="h-5 w-5" />}>
              Dashboard
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup title="Content" collapsible>
            <SidebarItem id="documents" icon={<FileText className="h-5 w-5" />}>
              Documents
            </SidebarItem>
            <SidebarItem id="users" icon={<Users className="h-5 w-5" />}>
              Users
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup title="System">
            <SidebarItem id="settings" icon={<Settings className="h-5 w-5" />}>
              Settings
            </SidebarItem>
            <SidebarItem 
              id="notifications" 
              icon={<Bell className="h-5 w-5" />}
              badge={<span className="h-5 w-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center">3</span>}
            >
              Notifications
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem id="logout" icon={<LogOut className="h-5 w-5" />}>
            Logout
          </SidebarItem>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4">This is where your main application content would appear.</p>
      </div>
    </div>
  ),
};

export const Collapsed: Story = {
  args: {
    defaultExpanded: false,
    defaultActiveItem: 'home',
    position: 'left',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <div className="h-[500px] flex">
      <Sidebar {...args}>
        <SidebarHeader>
          <SidebarLogo>
            <Zap className="h-6 w-6 text-primary-500" />
          </SidebarLogo>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem id="home" icon={<Home className="h-5 w-5" />}>
              Home
            </SidebarItem>
            <SidebarItem id="dashboard" icon={<LayoutDashboard className="h-5 w-5" />}>
              Dashboard
            </SidebarItem>
            <SidebarItem id="documents" icon={<FileText className="h-5 w-5" />}>
              Documents
            </SidebarItem>
            <SidebarItem id="users" icon={<Users className="h-5 w-5" />}>
              Users
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem id="settings" icon={<Settings className="h-5 w-5" />}>
            Settings
          </SidebarItem>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4">This is where your main application content would appear.</p>
      </div>
    </div>
  ),
};

export const RightSidebar: Story = {
  args: {
    defaultExpanded: true,
    defaultActiveItem: 'settings',
    position: 'right',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <div className="h-[500px] flex">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4">This is where your main application content would appear.</p>
      </div>
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center">
            <SidebarLogo>
              <Settings className="h-6 w-6 text-primary-500" />
            </SidebarLogo>
            <span className="ml-2 text-xl font-bold">Settings</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem id="profile" icon={<Users className="h-5 w-5" />}>
              Profile
            </SidebarItem>
            <SidebarItem id="settings" icon={<Settings className="h-5 w-5" />}>
              Preferences
            </SidebarItem>
            <SidebarItem id="notifications" icon={<Bell className="h-5 w-5" />}>
              Notifications
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  args: {
    defaultExpanded: true,
    defaultActiveItem: 'home',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <div className="h-[500px] flex">
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center">
            <SidebarLogo>
              <Zap className="h-6 w-6 text-primary-500" />
            </SidebarLogo>
            <span className="ml-2 text-xl font-bold">AppName</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem id="home" icon={<Home className="h-5 w-5" />}>
              Home
            </SidebarItem>
            <SidebarItem id="dashboard" icon={<LayoutDashboard className="h-5 w-5" />}>
              Dashboard
            </SidebarItem>
            <SidebarItem id="premium" icon={<Zap className="h-5 w-5" />} disabled>
              Premium Features
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup title="Content" collapsible>
            <SidebarItem id="documents" icon={<FileText className="h-5 w-5" />}>
              Documents
            </SidebarItem>
            <SidebarItem id="users" icon={<Users className="h-5 w-5" />} disabled>
              Admin Access
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4">Some items in the sidebar are disabled. These represent features that might require a specific permission level or subscription tier.</p>
      </div>
    </div>
  ),
};