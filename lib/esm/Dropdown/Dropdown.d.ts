import { FC, ReactNode } from 'react';
import { ButtonComponentProps } from '../Button';
import { TooltipProps } from '../Tooltip/Tooltip';
export declare type DropdownProps = ButtonComponentProps & Omit<TooltipProps, 'content' | 'style' | 'animation'> & {
    className?: string;
    label: ReactNode;
    inline?: boolean;
};
export declare const Dropdown: FC<DropdownProps> & {
    Item: FC<import("./DropdownItem").DropdownItemProps>;
    Header: FC<{}>;
    Divider: FC<{}>;
};
