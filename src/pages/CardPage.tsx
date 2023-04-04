import React from 'react';
import { FC } from 'react';

import { Card } from '../lib';
import { CodeExample, DemoPage } from './DemoPage';

const CardPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default card',
      code: (
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Card title
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </p>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Card with image',
      code: (
        <Card className="max-w-sm" imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Card title
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </p>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Horizontal card',
      code: (
        <Card className="max-w-sm" imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Card title
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </p>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default CardPage;
