import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//import React from 'react';
import { Fragment, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import classNames from 'classnames';
export const Accordion = ({ items, flush, arrowIcon: ArrowIcon = HiChevronDown }) => {
    const [openItems, setOpenItems] = useState(items.map((item) => item.open));
    return (_jsx("div", { children: items.map((item, index) => (_jsxs(Fragment, { children: [_jsx("h2", { children: _jsxs("button", { type: "button", className: classNames('flex w-full items-center justify-between border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400', {
                            'border px-5 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800': !flush,
                            'border-b': flush,
                            'border-t-0': index > 0,
                            'rounded-t-xl': !flush && index === 0,
                            'rounded-b-xl': !flush && index === items.length - 1 && !openItems[index],
                            'text-gray-900 dark:text-white': !!openItems[index],
                            'bg-gray-100 dark:bg-gray-800': !!openItems[index] && !flush,
                        }), onClick: () => setOpenItems({ ...openItems, [index]: !openItems[index] }), children: [_jsx("span", { children: item.title }, void 0), _jsx(ArrowIcon, { className: classNames('h-6 w-6 shrink-0', {
                                    'rotate-180': openItems[index],
                                }) }, void 0)] }, void 0) }, void 0), _jsx("div", { className: classNames({ hidden: !openItems[index] }), children: _jsx("div", { className: classNames('border-b border-t-0 border-gray-200 py-5 dark:border-gray-700 dark:bg-gray-900', {
                            'border px-5': !flush,
                            'rounded-b-xl': !flush && index === items.length - 1 && openItems[index],
                        }), children: item.body }, void 0) }, void 0)] }, index))) }, void 0));
};
