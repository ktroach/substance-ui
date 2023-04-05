import { ComponentProps, FC, ReactNode } from 'react';
export declare type AlertProps = {
    color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray';
    Icon?: FC<ComponentProps<'svg'>>;
    rounded?: boolean;
    withBorderAccent?: boolean;
    additionalContent?: ReactNode;
    onDismiss?: () => void;
};
export declare const Alert: FC<AlertProps>;
