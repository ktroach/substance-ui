import React from 'react';
import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Dropdown } from '../lib/Dropdown/Dropdown';

const DropdownPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Dropdown',
      code: (
        <Dropdown label="Dropdown button">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown Divider',
      code: (
        <Dropdown label="Dropdown button">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown Header',
      code: (
        <Dropdown label="Dropdown button">
          <Dropdown.Header>
            <span className="block text-sm">Header Title</span>
            <span className="block truncate text-sm font-medium">Header Item</span>
          </Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown item on click handler',
      code: (
        <Dropdown label="Dropdown with Handler">
          <Dropdown.Item onClick={() => alert('Item 1')}>Item 1</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Item 2')}>Item 2</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Item 3')}>Item 3</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Item 4')}>Item 4</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Sizing',
      code: (
        <div className="flex items-center gap-4">
          <Dropdown label="Small dropdown" size="sm">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 1</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Large dropdown" size="lg">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 1</Dropdown.Item>
          </Dropdown>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default DropdownPage;