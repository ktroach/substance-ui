import { FC } from 'react';
declare type Color = 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'pink' | 'purple';
declare type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type SpinnerProps = {
    className?: string;
    color?: Color;
    size?: Size;
    light?: boolean;
};
export declare const Spinner: FC<SpinnerProps>;
export {};
