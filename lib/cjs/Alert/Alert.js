"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const hi_1 = require("react-icons/hi");
const colorClasses = {
    blue: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
    red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
    green: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
    yellow: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
    gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
};
const Alert = ({ children, color = 'blue', Icon, rounded = true, withBorderAccent, additionalContent, onDismiss, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('flex flex-col gap-2 p-4 text-sm', colorClasses[color], {
            'rounded-lg': rounded,
            'border-t-4': withBorderAccent,
        }), role: "alert", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [Icon && (0, jsx_runtime_1.jsx)(Icon, { className: "mr-3 inline h-5 w-5 flex-shrink-0" }, void 0), (0, jsx_runtime_1.jsx)("div", { children: children }, void 0), onDismiss && ((0, jsx_runtime_1.jsxs)("button", { type: "button", className: (0, classnames_1.default)('-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2', {
                            'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300': color === 'blue',
                            'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300': color === 'red',
                            'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300': color === 'green',
                            'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300': color === 'yellow',
                            'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white': color === 'gray',
                        }), "aria-label": "Close", onClick: onDismiss, children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" }, void 0), (0, jsx_runtime_1.jsx)(hi_1.HiX, { className: "h-5 w-5" }, void 0)] }, void 0))] }, void 0), additionalContent && (0, jsx_runtime_1.jsx)("div", { children: additionalContent }, void 0)] }, void 0));
};
exports.Alert = Alert;
