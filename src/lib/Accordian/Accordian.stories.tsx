import { Meta, Story } from '@storybook/react/types-6-0';
import { AccordionSingleProps, AccordionMultipleProps } from "@radix-ui/react-accordion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent  } from './Accordian';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionSingleProps | AccordionMultipleProps> = (args) => <Accordion className="w-full" {...args}>
    <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Tigger 1</AccordionTrigger>
        <AccordionContent><p><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Tigger 2</AccordionTrigger>
        <AccordionContent><p><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></AccordionContent>
    </AccordionItem>
</Accordion>;

// https://www.radix-ui.com/docs/primitives/components/accordion#api-reference
export const DefaultAccordion = Template.bind({});
DefaultAccordion.storyName = 'Default';
DefaultAccordion.args = {
  children: 'Accordion',
  type: "single",
  collapsible: true,
  disabled: false,
  orientation: 'vertical', 
  dir: 'ltr'

};