import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          Accordions display a list of high-level options that can expand/collapse to reveal more information.

          ## Accessibility
          - Uses appropriate ARIA attributes (aria-expanded, aria-controls)
          - Supports keyboard navigation
          - Focus management for expanded/collapsed states

          ## Best Practices
          - Use for organizing related content
          - Keep headers concise and descriptive
          - Ensure expanded content isn't too long
          - Consider starting with the most important item expanded
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The initial expanded accordion item',
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be expanded simultaneously',
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
    defaultValue: 'item-1',
    allowMultiple: false,
  },
  render: (args) => (
    <Accordion {...args} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses appropriate ARIA attributes for accessibility.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic, and can be customized with additional classes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, with smooth transitions when expanding and collapsing content. The animations can be customized or disabled if needed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Content for section 1. Multiple sections can be expanded at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Content for section 2. Try expanding this while section 1 is already open.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          Content for section 3. All sections can be expanded simultaneously with this setting.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabledItem: Story = {
  args: {
    defaultValue: 'item-1',
  },
  render: (args) => (
    <Accordion {...args} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Available Item</AccordionTrigger>
        <AccordionContent>
          This accordion item is available for interaction.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Item</AccordionTrigger>
        <AccordionContent>
          This content should not be accessible since the item is disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Available Item</AccordionTrigger>
        <AccordionContent>
          This accordion item is also available for interaction.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};