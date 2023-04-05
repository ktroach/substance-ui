import { ComponentProps, FC, ReactNode } from 'react';
export declare type AccordionItem = {
    title: ReactNode;
    body: ReactNode;
    open?: boolean;
};
export declare type AccordionProps = {
    items: AccordionItem[];
    flush?: boolean;
    arrowIcon?: FC<ComponentProps<'svg'>>;
};
export declare const Accordion: FC<AccordionProps>;
