import { FC } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordian';
import { AccordianExampleProps } from './AccordianExampleProps';

export const AccordionSingleExample: FC<AccordianExampleProps> = ({ type, items, collapsible, defaultValue }) => {
    return (
        <Accordion type={type} defaultValue={defaultValue} collapsible={collapsible}>
            {items.map((item: any, itemIndex: any) => (
                <AccordionItem value={`item-${itemIndex}`}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))};
        </Accordion>
    );
};