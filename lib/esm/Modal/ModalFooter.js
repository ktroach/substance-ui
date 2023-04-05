import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useModalContext } from './ModalContext';
export const ModalFooter = ({ children, className }) => {
    const { popup } = useModalContext();
    return (_jsx("div", { className: classNames('flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600', {
            'border-t': !popup,
        }, className), children: children }, void 0));
};
