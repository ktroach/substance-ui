import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { HiOutlineX } from 'react-icons/hi';
import { useModalContext } from './ModalContext';
export const ModalHeader = ({ children }) => {
    const { popup, onClose } = useModalContext();
    return (_jsxs("div", { className: classNames('flex items-start justify-between rounded-t dark:border-gray-600', {
            'p-2': popup,
            'border-b p-5': !popup,
        }), children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl", children: children }, void 0), _jsx("button", { className: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white", type: "button", onClick: onClose, children: _jsx(HiOutlineX, { className: "h-5 w-5" }, void 0) }, void 0)] }, void 0));
};
