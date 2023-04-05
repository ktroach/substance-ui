import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useModalContext } from './ModalContext';
export const ModalBody = ({ children, className }) => {
    const { popup } = useModalContext();
    return (_jsx("div", { className: classNames('p-6', {
            'pt-0': popup,
        }, className), children: children }, void 0));
};
