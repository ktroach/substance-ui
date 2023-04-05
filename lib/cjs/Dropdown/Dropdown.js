"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
//import React from 'react';
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const classnames_1 = __importDefault(require("classnames"));
const Button_1 = require("../Button");
const Tooltip_1 = require("../Tooltip/Tooltip");
const DropdownItem_1 = require("./DropdownItem");
const DropdownDivider_1 = require("./DropdownDivider");
const DropdownHeader_1 = require("./DropdownHeader");
const icons = {
    top: hi_1.HiOutlineChevronUp,
    right: hi_1.HiOutlineChevronRight,
    bottom: hi_1.HiOutlineChevronDown,
    left: hi_1.HiOutlineChevronLeft,
};
const DropdownComponent = (props) => {
    const { children, className, label, inline, ...restProps } = props;
    const { placement = inline ? 'bottom-start' : 'bottom', arrow = false, trigger = 'click', ...buttonProps } = restProps;
    const Icon = (0, react_1.useMemo)(() => {
        const [p] = placement.split('-');
        return icons[p] ?? hi_1.HiOutlineChevronDown;
    }, [placement]);
    const content = (0, react_1.useMemo)(() => (0, jsx_runtime_1.jsx)("ul", { className: "py-1", children: children }, void 0), [children]);
    const TriggerWrapper = ({ children }) => inline ? (0, jsx_runtime_1.jsx)("button", { className: "flex items-center", children: children }, void 0) : (0, jsx_runtime_1.jsx)(Button_1.Button, { ...buttonProps, children: children }, void 0);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, { className: (0, classnames_1.default)('w-44 !rounded !p-0', className), content: content, style: "auto", animation: "duration-100", placement: placement, arrow: arrow, trigger: trigger, children: (0, jsx_runtime_1.jsxs)(TriggerWrapper, { children: [label, (0, jsx_runtime_1.jsx)(Icon, { className: "ml-2 h-4 w-4" }, void 0)] }, void 0) }, void 0));
};
DropdownComponent.displayName = 'Dropdown';
DropdownItem_1.DropdownItem.displayName = 'Dropdown.Item';
DropdownHeader_1.DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider_1.DropdownDivider.displayName = 'Dropdown.Divider';
exports.Dropdown = Object.assign(DropdownComponent, {
    Item: DropdownItem_1.DropdownItem,
    Header: DropdownHeader_1.DropdownHeader,
    Divider: DropdownDivider_1.DropdownDivider,
});
