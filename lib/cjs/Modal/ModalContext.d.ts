/// <reference types="react" />
declare type ModalContext = {
    popup?: boolean;
    onClose?: () => void;
};
export declare const ModalContext: import("react").Context<ModalContext | undefined>;
export declare function useModalContext(): ModalContext;
export {};
