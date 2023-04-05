import { FC } from 'react';
declare type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
export declare type ModalProps = {
    show?: boolean;
    popup?: boolean;
    size?: Size;
    onClose?: () => void;
    persistant?: boolean;
};
export declare const Modal: FC<ModalProps> & {
    Header: FC<{}>;
    Body: FC<import("./ModalBody").ModalBodyProps>;
    Footer: FC<import("./ModalFooter").ModalFooterProps>;
};
export {};
