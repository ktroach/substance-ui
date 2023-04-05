"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalFooter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const ModalContext_1 = require("./ModalContext");
const ModalFooter = ({ children, className }) => {
    const { popup } = (0, ModalContext_1.useModalContext)();
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600', {
            'border-t': !popup,
        }, className), children: children }, void 0));
};
exports.ModalFooter = ModalFooter;
