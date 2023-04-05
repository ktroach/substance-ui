import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalContext } from './ModalContext';
const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
};
const ModalComponent = ({ children, show, popup, size = '2xl', onClose }) => (_jsx(ModalContext.Provider, { value: { popup, onClose }, children: _jsx("div", { className: classNames('fixed right-0 left-0 top-4 z-50 h-modal items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full', {
            'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80': show,
            hidden: !show,
        }), "aria-hidden": !show, children: _jsx("div", { className: classNames('relative h-full w-full px-4 md:h-auto', sizeClasses[size]), children: _jsx("div", { className: "relative rounded-lg bg-white shadow dark:bg-gray-700", children: children }, void 0) }, void 0) }, void 0) }, void 0));
ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';
export const Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });
