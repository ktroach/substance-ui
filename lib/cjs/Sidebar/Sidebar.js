"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const hi_1 = require("react-icons/hi");
const Tooltip_1 = require("../Tooltip/Tooltip");
const Sidebar = ({ collapsed, itemsGroups }) => {
    const [groupsState, setGroupsState] = (0, react_1.useState)({});
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const toggleGroup = (index) => () => {
        setGroupsState((state) => ({ ...state, [index]: !state[index] }));
    };
    const ItemWrapper = ({ title, children }) => collapsed ? ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, { content: title, placement: "right", children: children }, void 0)) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0));
    return ((0, jsx_runtime_1.jsx)("aside", { className: (0, classnames_1.default)('h-full', {
            'w-64': !collapsed,
            'w-16': collapsed,
        }), "aria-label": "sidebar", children: (0, jsx_runtime_1.jsx)("div", { className: "h-full overflow-y-auto border-r border-gray-200 bg-white py-4 px-3 dark:border-gray-700 dark:bg-gray-800", children: itemsGroups.map((items, groupIndex) => ((0, jsx_runtime_1.jsx)("ul", { className: (0, classnames_1.default)('space-y-2', {
                    'mt-4 border-t border-gray-200 pt-4 dark:border-gray-700': groupIndex > 0,
                }), children: items.map((item, itemIndex) => ((0, jsx_runtime_1.jsx)("li", { children: item.group === false ? ((0, jsx_runtime_1.jsx)(ItemWrapper, { title: item.title, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: (0, classnames_1.default)('group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700', {
                                'bg-gray-100 dark:bg-gray-700': item.href === pathname,
                            }), to: item.href, children: [(0, jsx_runtime_1.jsx)("div", { className: "group-hover:text-black dark:group-hover:text-white", children: (0, jsx_runtime_1.jsx)(item.icon, { className: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" }, void 0) }, void 0), !collapsed && (0, jsx_runtime_1.jsx)("span", { className: "ml-3 flex-1 whitespace-nowrap", children: item.title }, void 0), !collapsed && item.label && ((0, jsx_runtime_1.jsx)("span", { className: "ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200", children: item.label }, void 0))] }, void 0) }, void 0)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ItemWrapper, { title: item.title, children: (0, jsx_runtime_1.jsxs)("button", { type: "button", className: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", onClick: toggleGroup(groupIndex), children: [(0, jsx_runtime_1.jsx)(item.icon, { className: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" }, void 0), !collapsed && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: "ml-3 flex-1 whitespace-nowrap text-left", children: item.title }, void 0), (0, jsx_runtime_1.jsx)(hi_1.HiChevronDown, { className: "h-6 w-6" }, void 0)] }, void 0))] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("ul", { className: (0, classnames_1.default)('space-y-2 py-2', {
                                    hidden: !groupsState[groupIndex],
                                }), children: item.items.map((subItem, subItemIndex) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(ItemWrapper, { title: subItem.title, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: (0, classnames_1.default)('group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700', {
                                                'pl-11': !collapsed,
                                                'bg-gray-100 dark:bg-gray-700': subItem.href === pathname,
                                            }), to: subItem.href, children: [(0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)('flex-1 whitespace-nowrap', {
                                                        'text-left': !collapsed,
                                                        'text-center': collapsed,
                                                    }), children: !collapsed ? subItem.title : subItem.title[0] }, void 0), !collapsed && subItem.label && ((0, jsx_runtime_1.jsx)("span", { className: "ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200", children: subItem.label }, void 0))] }, void 0) }, void 0) }, subItemIndex))) }, void 0)] }, void 0)) }, itemIndex))) }, groupIndex))) }, void 0) }, void 0));
};
exports.Sidebar = Sidebar;
