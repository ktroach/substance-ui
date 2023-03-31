import React from 'react';
import { ComponentProps, FC, ReactNode  } from 'react';
import classNames from 'classnames';

type Color = 'blue' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type PositionInGroup = 'start' | 'middle' | 'end';

export type ButtonComponentProps = Omit<ComponentProps<'button'>, 'color'> & {
  pill?: boolean;
  outline?: boolean;
  label?: ReactNode;
  color?: Color;
  size?: Size;
  icon?: FC<ComponentProps<'svg'>>;
  positionInGroup?: PositionInGroup;
};

const colorClasses: Record<Color, string> = {
  blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
  alternative:
    'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800',
  dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800',
  light:
    'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800 dark:disabled:hover:bg-gray-600',
  green:
    'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600',
  yellow:
    'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400',
  purple:
    'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600',
};

const sizeClasses: Record<Size, string> = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
  xl: 'text-base px-6 py-3',
};

const iconSizeClasses: Record<Size, string> = {
  xs: '!px-1',
  sm: '!px-1.5',
  md: '!px-2',
  lg: '!p-2.5',
  xl: '!p-3',
};

export const Button: FC<ButtonComponentProps> = ({
  children,
  className,
  pill,
  outline,
  disabled = false,
  size = 'md',
  icon: Icon,
  color = 'blue',
  positionInGroup,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
        'group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10',
        pill ? 'rounded-full' : 'rounded-lg',
        colorClasses[color],
        {
          'border border-gray-900 dark:border-white': color === 'alternative' && outline,
          'cursor-not-allowed opacity-50': disabled,
          'focus:!ring-2': !!positionInGroup,
          'rounded-r-none': positionInGroup === 'start',
          'rounded-none border-l-0 pl-0': positionInGroup === 'middle',
          'rounded-l-none border-l-0 pl-0': positionInGroup === 'end',
        },
        className,
      )}
      type="button"
      {...props}
    >
      <span
        className={classNames('flex items-center', sizeClasses[size], outline && pill ? 'rounded-full' : 'rounded-md', {
          'bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white':
            outline,
          'rounded-r-none': positionInGroup === 'start',
          'rounded-none': positionInGroup === 'middle',
          'rounded-l-none': positionInGroup === 'end',
          [iconSizeClasses[size]]: !!Icon,
        })}
      >
        {Icon ? <Icon className="h-5 w-5" /> : children}
      </span>
    </button>
  );
};
