"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
//import React from 'react';
const core_1 = require("@popperjs/core");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const Tooltip = ({ children, className, content, placement = 'top', trigger = 'hover', style = 'dark', animation = 'duration-300', arrow = true, }) => {
    const tooltipRef = (0, react_1.useRef)(null);
    const wrapperRef = (0, react_1.useRef)(null);
    const popperInstance = (0, react_1.useRef)();
    const [visible, setVisible] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (wrapperRef.current && tooltipRef.current) {
            popperInstance.current = (0, core_1.createPopper)(wrapperRef.current, tooltipRef.current, {
                placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                    { name: 'eventListeners', enabled: true },
                ],
            });
        }
    }, [placement]);
    const show = () => {
        setVisible(true);
        popperInstance.current?.update();
    };
    const hide = () => setTimeout(() => setVisible(false), 100);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('tooltip absolute z-10 inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm', animation !== false && `transition-opacity ${animation}`, {
                    'invisible opacity-0': !visible,
                    'bg-gray-900 text-white dark:bg-gray-700': style === 'dark',
                    'border border-gray-200 bg-white text-gray-900': style === 'light',
                    'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white': style === 'auto',
                }, className), ref: tooltipRef, role: "tooltip", children: [content, arrow && (0, jsx_runtime_1.jsx)("div", { className: "tooltip-arrow", "data-popper-arrow": true }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("span", { className: "w-fit", ref: wrapperRef, onFocus: show, onBlur: hide, ...(trigger === 'hover' ? { onMouseEnter: show, onMouseLeave: hide } : { onClick: show }), children: children }, void 0)] }, void 0));
};
exports.Tooltip = Tooltip;
