import React from 'react';
import { FC } from 'react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

import { Button, Spinner } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const ButtonsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default button',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button color="alternative">Alternative</Button>
          <Button color="dark">Dark</Button>
          <Button color="light">Light</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="purple">Purple</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button pills',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button pill>Default</Button>
          <Button color="alternative" pill>
            Alternative
          </Button>
          <Button color="dark" pill>
            Dark
          </Button>
          <Button color="light" pill>
            Light
          </Button>
          <Button color="green" pill>
            Green
          </Button>
          <Button color="red" pill>
            Red
          </Button>
          <Button color="yellow" pill>
            Yellow
          </Button>
          <Button color="purple" pill>
            Purple
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button sizes',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Base</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Buttons with icon',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Buy now
          </Button>
          <Button>
            Choose plan
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button with label',
      code: <Button label="2">Messages</Button>,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Icon buttons',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button icon={HiOutlineArrowRight} />
          <Button icon={HiOutlineArrowRight} pill />
          <Button icon={HiOutlineArrowRight} outline />
          <Button icon={HiOutlineArrowRight} pill outline />
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Loading',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <Spinner className="mr-3" size="sm" light />
            Loading ...
          </Button>
          <Button outline>
            <Spinner className="mr-3" size="sm" light />
            Loading ...
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Disabled',
      code: <Button disabled>Disabled button</Button>,
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonsPage;
