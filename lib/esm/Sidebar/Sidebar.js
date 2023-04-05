import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
//import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import { Tooltip } from '../Tooltip/Tooltip';
export const Sidebar = ({ collapsed, itemsGroups }) => {
    const [groupsState, setGroupsState] = useState({});
    const { pathname } = useLocation();
    const toggleGroup = (index) => () => {
        setGroupsState((state) => ({ ...state, [index]: !state[index] }));
    };
    const ItemWrapper = ({ title, children }) => collapsed ? (_jsx(Tooltip, { content: title, placement: "right", children: children }, void 0)) : (_jsx(_Fragment, { children: children }, void 0));
    return (_jsx("aside", { className: classNames('h-full', {
            'w-64': !collapsed,
            'w-16': collapsed,
        }), "aria-label": "sidebar", children: _jsx("div", { className: "h-full overflow-y-auto border-r border-gray-200 bg-white py-4 px-3 dark:border-gray-700 dark:bg-gray-800", children: itemsGroups.map((items, groupIndex) => (_jsx("ul", { className: classNames('space-y-2', {
                    'mt-4 border-t border-gray-200 pt-4 dark:border-gray-700': groupIndex > 0,
                }), children: items.map((item, itemIndex) => (_jsx("li", { children: item.group === false ? (_jsx(ItemWrapper, { title: item.title, children: _jsxs(Link, { className: classNames('group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700', {
                                'bg-gray-100 dark:bg-gray-700': item.href === pathname,
                            }), to: item.href, children: [_jsx("div", { className: "group-hover:text-black dark:group-hover:text-white", children: _jsx(item.icon, { className: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" }, void 0) }, void 0), !collapsed && _jsx("span", { className: "ml-3 flex-1 whitespace-nowrap", children: item.title }, void 0), !collapsed && item.label && (_jsx("span", { className: "ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200", children: item.label }, void 0))] }, void 0) }, void 0)) : (_jsxs(_Fragment, { children: [_jsx(ItemWrapper, { title: item.title, children: _jsxs("button", { type: "button", className: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", onClick: toggleGroup(groupIndex), children: [_jsx(item.icon, { className: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" }, void 0), !collapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "ml-3 flex-1 whitespace-nowrap text-left", children: item.title }, void 0), _jsx(HiChevronDown, { className: "h-6 w-6" }, void 0)] }, void 0))] }, void 0) }, void 0), _jsx("ul", { className: classNames('space-y-2 py-2', {
                                    hidden: !groupsState[groupIndex],
                                }), children: item.items.map((subItem, subItemIndex) => (_jsx("li", { children: _jsx(ItemWrapper, { title: subItem.title, children: _jsxs(Link, { className: classNames('group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700', {
                                                'pl-11': !collapsed,
                                                'bg-gray-100 dark:bg-gray-700': subItem.href === pathname,
                                            }), to: subItem.href, children: [_jsx("span", { className: classNames('flex-1 whitespace-nowrap', {
                                                        'text-left': !collapsed,
                                                        'text-center': collapsed,
                                                    }), children: !collapsed ? subItem.title : subItem.title[0] }, void 0), !collapsed && subItem.label && (_jsx("span", { className: "ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200", children: subItem.label }, void 0))] }, void 0) }, void 0) }, subItemIndex))) }, void 0)] }, void 0)) }, itemIndex))) }, groupIndex))) }, void 0) }, void 0));
};
