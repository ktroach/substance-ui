import { ComponentProps, FC } from 'react';
export declare type SidebarItem = {
    icon: FC<ComponentProps<'svg'>>;
    title: string;
} & ({
    group: true;
    items: {
        title: string;
        href: string;
        label?: string;
    }[];
} | {
    group: false;
    href: string;
    label?: string;
});
export declare type SidebarProps = {
    collapsed: boolean;
    itemsGroups: SidebarItem[][];
};
export declare const Sidebar: FC<SidebarProps>;
