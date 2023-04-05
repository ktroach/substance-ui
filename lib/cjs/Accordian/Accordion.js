"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
//import React from 'react';
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const classnames_1 = __importDefault(require("classnames"));
const Accordion = ({ items, flush, arrowIcon: ArrowIcon = hi_1.HiChevronDown }) => {
    const [openItems, setOpenItems] = (0, react_1.useState)(items.map((item) => item.open));
    return ((0, jsx_runtime_1.jsx)("div", { children: items.map((item, index) => ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, jsx_runtime_1.jsxs)("button", { type: "button", className: (0, classnames_1.default)('flex w-full items-center justify-between border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400', {
                            'border px-5 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800': !flush,
                            'border-b': flush,
                            'border-t-0': index > 0,
                            'rounded-t-xl': !flush && index === 0,
                            'rounded-b-xl': !flush && index === items.length - 1 && !openItems[index],
                            'text-gray-900 dark:text-white': !!openItems[index],
                            'bg-gray-100 dark:bg-gray-800': !!openItems[index] && !flush,
                        }), onClick: () => setOpenItems({ ...openItems, [index]: !openItems[index] }), children: [(0, jsx_runtime_1.jsx)("span", { children: item.title }, void 0), (0, jsx_runtime_1.jsx)(ArrowIcon, { className: (0, classnames_1.default)('h-6 w-6 shrink-0', {
                                    'rotate-180': openItems[index],
                                }) }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)({ hidden: !openItems[index] }), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('border-b border-t-0 border-gray-200 py-5 dark:border-gray-700 dark:bg-gray-900', {
                            'border px-5': !flush,
                            'rounded-b-xl': !flush && index === items.length - 1 && openItems[index],
                        }), children: item.body }, void 0) }, void 0)] }, index))) }, void 0));
};
exports.Accordion = Accordion;
