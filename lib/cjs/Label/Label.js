"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const colorClasses = {
    default: 'text-gray-900 dark:text-white',
    blue: 'text-blue-700 dark:text-blue-500',
    red: 'text-red-700 dark:text-red-500',
    green: 'text-green-700 dark:text-green-500',
    yellow: 'text-yellow-500 dark:text-yellow-300',
    purple: 'text-purple-700 dark:text-purple-500',
};
const Label = ({ children, color = 'default', className, ...props }) => ((0, jsx_runtime_1.jsx)("label", { className: (0, classnames_1.default)('text-sm font-medium', colorClasses[color], className), ...props, children: children }, void 0));
exports.Label = Label;
