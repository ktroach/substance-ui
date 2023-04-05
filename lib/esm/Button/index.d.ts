import { ComponentProps, FC, ReactNode } from 'react';
export declare type Color = 'blue' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
declare type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
declare type PositionInGroup = 'start' | 'middle' | 'end';
export declare type ButtonComponentProps = Omit<ComponentProps<'button'>, 'color'> & {
    pill?: boolean;
    outline?: boolean;
    label?: ReactNode;
    color?: Color;
    size?: Size;
    icon?: FC<ComponentProps<'svg'>>;
    positionInGroup?: PositionInGroup;
};
export declare const Button: FC<ButtonComponentProps> & {
    Group: FC<import("./ButtonGroup").ButtonGroupProps>;
};
export {};
