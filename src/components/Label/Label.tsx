import { ComponentProps, FC } from 'react';
import classNames from 'classnames';

type Color =  'default' | 'blue' | 'red' | 'green' | 'yellow' | 'purple';

export type LabelProps = ComponentProps<'label'> & {
  color?: Color;
};

const colorClasses: Record<Color, string> = {
    default: 'text-gray-900 dark:text-white',
    blue:    'text-blue-700 dark:text-blue-500',
    red:     'text-red-700 dark:text-red-500',
    green:   'text-green-700 dark:text-green-500',
    yellow:  'text-yellow-500 dark:text-yellow-300',
    purple:  'text-purple-700 dark:text-purple-500',
};

export const Label: FC<LabelProps> = ({ children, color = 'default', className, ...props }) => (
  <label className={classNames('text-sm font-medium', colorClasses[color], className)} {...props}>
    {children}
  </label>
);