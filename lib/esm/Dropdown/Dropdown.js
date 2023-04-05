import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//import React from 'react';
import { useMemo } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import classNames from 'classnames';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip/Tooltip';
import { DropdownItem } from './DropdownItem';
import { DropdownDivider } from './DropdownDivider';
import { DropdownHeader } from './DropdownHeader';
const icons = {
    top: HiOutlineChevronUp,
    right: HiOutlineChevronRight,
    bottom: HiOutlineChevronDown,
    left: HiOutlineChevronLeft,
};
const DropdownComponent = (props) => {
    const { children, className, label, inline, ...restProps } = props;
    const { placement = inline ? 'bottom-start' : 'bottom', arrow = false, trigger = 'click', ...buttonProps } = restProps;
    const Icon = useMemo(() => {
        const [p] = placement.split('-');
        return icons[p] ?? HiOutlineChevronDown;
    }, [placement]);
    const content = useMemo(() => _jsx("ul", { className: "py-1", children: children }, void 0), [children]);
    const TriggerWrapper = ({ children }) => inline ? _jsx("button", { className: "flex items-center", children: children }, void 0) : _jsx(Button, { ...buttonProps, children: children }, void 0);
    return (_jsx(Tooltip, { className: classNames('w-44 !rounded !p-0', className), content: content, style: "auto", animation: "duration-100", placement: placement, arrow: arrow, trigger: trigger, children: _jsxs(TriggerWrapper, { children: [label, _jsx(Icon, { className: "ml-2 h-4 w-4" }, void 0)] }, void 0) }, void 0));
};
DropdownComponent.displayName = 'Dropdown';
DropdownItem.displayName = 'Dropdown.Item';
DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider.displayName = 'Dropdown.Divider';
export const Dropdown = Object.assign(DropdownComponent, {
    Item: DropdownItem,
    Header: DropdownHeader,
    Divider: DropdownDivider,
});
