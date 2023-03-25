import React from 'react';
import { FC } from 'react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';

import { Accordion, AccordionItem } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const AccordionPage: FC = () => {
  const items: AccordionItem[] = [
    {
      open: true,
      title: 'What is Substance?',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Substance React is an open-source library of interactive components built on top of Tailwind CSS.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a
              href="https://substance-react.com/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      ),
    },
    {
      title: 'Is there a Figma file available?',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Substance is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a href="https://substance-react.com/figma/" className="text-blue-600 hover:underline dark:text-blue-500">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Substance.
          </p>
        </div>
      ),
    },
    {
      title: 'What are the differences between Substance and Tailwind UI?',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Substance are open source under the MIT license,
            Tailwind UI is a paid product. Another difference is that Substance relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
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
