import React from 'react';
import { FC } from 'react';
import { HiHome } from 'react-icons/hi';

import { Breadcrumb } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const BreadcrumbPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default breadcrumb',
      code: (
        <Breadcrumb
          items={[
            {
              icon: HiHome,
              label: 'Home',
              href: '#/breadcrumb',
            },
            {
              label: 'Projects',
              href: '#/breadcrumb',
            },
            {
              label: 'Substance React',
            },
          ]}
        />
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default BreadcrumbPage;
