import React from 'react';
import { FC } from 'react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';

import { Accordion, AccordionItem } from '../lib';
import { CodeExample, DemoPage } from './DemoPage';

const AccordionPage: FC = () => {
  const items: AccordionItem[] = [
    {
      open: true,
      title: 'Accordian Header 1',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Accordian Body 1
          </p>
        </div>
      ),
    },
    {
      title: 'Accordian Header 2',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Accordian Body 2
          </p>
        </div>
      ),
    },
  ];

  const examples: CodeExample[] = [
    {
      title: 'Default accordion',
      code: <Accordion items={items} />,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Always open',
      code: <Accordion items={items} />,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Flush accordion',
      code: <Accordion items={items} flush />,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Arrow style',
      code: <Accordion items={items} arrowIcon={HiOutlineArrowCircleDown} />,
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default AccordionPage;
