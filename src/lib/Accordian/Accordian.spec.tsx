import { cleanup, render } from '@testing-library/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent  } from './Accordian';

describe('Accordion Component', () => {
  afterEach(cleanup);

  it('should render an Accordion', () => {
    const { getByTestId } = render(
      <Accordion
        className="bg-blue w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="item-1">
            <AccordionTrigger>Accordion Tigger 1</AccordionTrigger>
            <AccordionContent>Accordion Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>Accordion Tigger 2</AccordionTrigger>
            <AccordionContent>Accordion Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  });

});