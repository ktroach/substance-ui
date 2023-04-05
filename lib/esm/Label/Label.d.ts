import { ComponentProps, FC } from 'react';
declare type Color = 'default' | 'blue' | 'red' | 'green' | 'yellow' | 'purple';
export declare type LabelProps = ComponentProps<'label'> & {
    color?: Color;
};
export declare const Label: FC<LabelProps>;
export {};
