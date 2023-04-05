import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//import React from 'react';
import { createPopper } from '@popperjs/core';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
export const Tooltip = ({ children, className, content, placement = 'top', trigger = 'hover', style = 'dark', animation = 'duration-300', arrow = true, }) => {
    const tooltipRef = useRef(null);
    const wrapperRef = useRef(null);
    const popperInstance = useRef();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (wrapperRef.current && tooltipRef.current) {
            popperInstance.current = createPopper(wrapperRef.current, tooltipRef.current, {
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: classNames('tooltip absolute z-10 inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm', animation !== false && `transition-opacity ${animation}`, {
                    'invisible opacity-0': !visible,
                    'bg-gray-900 text-white dark:bg-gray-700': style === 'dark',
                    'border border-gray-200 bg-white text-gray-900': style === 'light',
                    'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white': style === 'auto',
                }, className), ref: tooltipRef, role: "tooltip", children: [content, arrow && _jsx("div", { className: "tooltip-arrow", "data-popper-arrow": true }, void 0)] }, void 0), _jsx("span", { className: "w-fit", ref: wrapperRef, onFocus: show, onBlur: hide, ...(trigger === 'hover' ? { onMouseEnter: show, onMouseLeave: hide } : { onClick: show }), children: children }, void 0)] }, void 0));
};
