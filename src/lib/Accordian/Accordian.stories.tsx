import { Meta, Story } from '@storybook/react/types-6-0';
import { AccordionSingleProps, AccordionMultipleProps } from "@radix-ui/react-accordion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent  } from './Accordian';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionSingleProps | AccordionMultipleProps> = (args) => <Accordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.storyName = 'Default';
DefaultAccordion.args = {
  children: 'Accordion',
};