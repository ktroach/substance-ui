//import React from 'react';
import { FC } from 'react';
import { DropdownDivider } from './DropdownDivider';

export const DropdownHeader: FC = ({ children }) => (
  <>
    <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">{children}</div>
    <DropdownDivider />
  </>
);