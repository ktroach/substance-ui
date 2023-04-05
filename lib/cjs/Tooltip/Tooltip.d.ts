import { Placement } from '@popperjs/core';
import { FC, ReactNode } from 'react';
export declare type TooltipProps = {
    className?: string;
    content: ReactNode;
    placement?: Placement;
    trigger?: 'hover' | 'click';
    style?: 'dark' | 'light' | 'auto';
    animation?: false | `duration-${number}`;
    arrow?: boolean;
};
export declare const Tooltip: FC<TooltipProps>;
