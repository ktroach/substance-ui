import { ComponentProps, FC } from 'react';
export declare type BadgeProps = {
    color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray' | 'indigo' | 'purple' | 'pink';
    size?: 'xs' | 'sm';
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
};
export declare const Badge: FC<BadgeProps>;
