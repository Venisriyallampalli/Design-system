import React, { useState } from 'react';
import {
  Home,
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  HelpCircle,
  Bell,
  Zap
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarItem,
  SidebarGroup,
  SidebarTrigger,
  SidebarLogo
} from './components/ui/sidebar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';
import { Tag } from './components/ui/tag';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  };

  // Setup example tags
  const [tags, setTags] = useState([
    { id: 1, text: 'Design System' },
    { id: 2, text: 'Components' },
    { id: 3, text: 'React' },
    { id: 4, text: 'TypeScript' }
  ]);

  const removeTag = (id: number) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'data-theme="dark"' : ''}`}>
      {/* Sidebar */}
      <Sidebar defaultActiveItem="dashboard">
        <SidebarHeader>
          <div className="flex items-center">
            <SidebarLogo>
              <Zap className="h-6 w-6 text-primary-500" />
            </SidebarLogo>
            <span className="ml-2 text-xl font-bold">DesignSys</span>
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
            <SidebarItem id="help" icon={<HelpCircle className="h-5 w-5" />}>
              Help & Support
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem id="logout" icon={<LogOut className="h-5 w-5" />}>
            Logout
          </SidebarItem>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Enterprise Design System</h1>
            <button 
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-md bg-surface-muted hover:bg-surface-border transition-colors"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Color System</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Primary</h3>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full rounded-md bg-primary-50 flex items-center px-2 text-xs">50</div>
                  <div className="h-8 w-full rounded-md bg-primary-100 flex items-center px-2 text-xs">100</div>
                  <div className="h-8 w-full rounded-md bg-primary-200 flex items-center px-2 text-xs">200</div>
                  <div className="h-8 w-full rounded-md bg-primary-300 flex items-center px-2 text-xs">300</div>
                  <div className="h-8 w-full rounded-md bg-primary-400 flex items-center px-2 text-xs">400</div>
                  <div className="h-8 w-full rounded-md bg-primary-500 flex items-center px-2 text-xs text-white">500</div>
                  <div className="h-8 w-full rounded-md bg-primary-600 flex items-center px-2 text-xs text-white">600</div>
                  <div className="h-8 w-full rounded-md bg-primary-700 flex items-center px-2 text-xs text-white">700</div>
                  <div className="h-8 w-full rounded-md bg-primary-800 flex items-center px-2 text-xs text-white">800</div>
                  <div className="h-8 w-full rounded-md bg-primary-900 flex items-center px-2 text-xs text-white">900</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Secondary</h3>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full rounded-md bg-secondary-50 flex items-center px-2 text-xs">50</div>
                  <div className="h-8 w-full rounded-md bg-secondary-100 flex items-center px-2 text-xs">100</div>
                  <div className="h-8 w-full rounded-md bg-secondary-200 flex items-center px-2 text-xs">200</div>
                  <div className="h-8 w-full rounded-md bg-secondary-300 flex items-center px-2 text-xs">300</div>
                  <div className="h-8 w-full rounded-md bg-secondary-400 flex items-center px-2 text-xs">400</div>
                  <div className="h-8 w-full rounded-md bg-secondary-500 flex items-center px-2 text-xs text-white">500</div>
                  <div className="h-8 w-full rounded-md bg-secondary-600 flex items-center px-2 text-xs text-white">600</div>
                  <div className="h-8 w-full rounded-md bg-secondary-700 flex items-center px-2 text-xs text-white">700</div>
                  <div className="h-8 w-full rounded-md bg-secondary-800 flex items-center px-2 text-xs text-white">800</div>
                  <div className="h-8 w-full rounded-md bg-secondary-900 flex items-center px-2 text-xs text-white">900</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Semantic</h3>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full rounded-md bg-success-500 flex items-center px-2 text-xs text-white">Success</div>
                  <div className="h-8 w-full rounded-md bg-warning-500 flex items-center px-2 text-xs">Warning</div>
                  <div className="h-8 w-full rounded-md bg-error-500 flex items-center px-2 text-xs text-white">Error</div>
                  <div className="h-8 w-full rounded-md bg-neutral-500 flex items-center px-2 text-xs text-white">Neutral</div>
                  <div className="h-8 w-full rounded-md bg-surface-card flex items-center px-2 text-xs border border-surface-border">Surface Card</div>
                  <div className="h-8 w-full rounded-md bg-surface-background flex items-center px-2 text-xs border border-surface-border">Surface Background</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Display Components</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Accordion</h3>
              <Accordion defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                  <AccordionContent>
                    This is the content for accordion item 1. You can put any content here including
                    paragraphs, lists, or other components. The accordion will expand to fit the content.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                  <AccordionContent>
                    This is the content for accordion item 2. Accordions are useful for showing and hiding
                    related content without requiring the user to navigate to a new page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" disabled>
                  <AccordionTrigger>Disabled Accordion Item</AccordionTrigger>
                  <AccordionContent>
                    This content won't be accessible because the accordion item is disabled.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag 
                    key={tag.id} 
                    variant="default"
                    onRemove={() => removeTag(tag.id)}
                  >
                    {tag.text}
                  </Tag>
                ))}
                <Tag variant="secondary">Secondary</Tag>
                <Tag variant="success">Success</Tag>
                <Tag variant="warning">Warning</Tag>
                <Tag variant="error">Error</Tag>
                <Tag variant="outline">Outline</Tag>
                <Tag 
                  variant="primary" 
                  size="sm"
                >
                  Small
                </Tag>
                <Tag 
                  variant="primary" 
                  size="lg"
                >
                  Large
                </Tag>
                <Tag 
                  variant="primary" 
                  disabled
                >
                  Disabled
                </Tag>
                <Tag 
                  variant="primary" 
                  icon={<Bell className="h-3 w-3" />}
                >
                  With Icon
                </Tag>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Navigation Components</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Tabs</h3>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Account</TabsTrigger>
                  <TabsTrigger value="tab2">Notifications</TabsTrigger>
                  <TabsTrigger value="tab3">Security</TabsTrigger>
                  <TabsTrigger value="tab4" disabled>Disabled</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <div className="p-4 border border-surface-border rounded-md mt-2">
                    <h4 className="font-medium mb-2">Account Settings</h4>
                    <p className="text-sm text-neutral-600">
                      Manage your account settings and preferences. Update your profile information, 
                      email address, and password.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2">
                  <div className="p-4 border border-surface-border rounded-md mt-2">
                    <h4 className="font-medium mb-2">Notification Preferences</h4>
                    <p className="text-sm text-neutral-600">
                      Control which notifications you receive from the system. Set your notification
                      preferences for email, in-app, and mobile notifications.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3">
                  <div className="p-4 border border-surface-border rounded-md mt-2">
                    <h4 className="font-medium mb-2">Security Settings</h4>
                    <p className="text-sm text-neutral-600">
                      Manage your security settings, including two-factor authentication, security questions,
                      and active sessions.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Vertical Tabs</h3>
              <Tabs defaultValue="vtab1" className="w-full" orientation="vertical">
                <TabsList className="w-48" variant="pills">
                  <TabsTrigger value="vtab1" className="justify-start">Personal Info</TabsTrigger>
                  <TabsTrigger value="vtab2" className="justify-start">Preferences</TabsTrigger>
                  <TabsTrigger value="vtab3" className="justify-start">Privacy</TabsTrigger>
                </TabsList>
                <div className="flex-1">
                  <TabsContent value="vtab1" className="m-0">
                    <div className="p-4 border border-surface-border rounded-md">
                      <h4 className="font-medium mb-2">Personal Information</h4>
                      <p className="text-sm text-neutral-600">
                        Update your personal information such as name, email, and profile picture.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="vtab2" className="m-0">
                    <div className="p-4 border border-surface-border rounded-md">
                      <h4 className="font-medium mb-2">User Preferences</h4>
                      <p className="text-sm text-neutral-600">
                        Set your language, timezone, and other application preferences.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="vtab3" className="m-0">
                    <div className="p-4 border border-surface-border rounded-md">
                      <h4 className="font-medium mb-2">Privacy Settings</h4>
                      <p className="text-sm text-neutral-600">
                        Control your data privacy settings, what information is shared with others.
                      </p>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;