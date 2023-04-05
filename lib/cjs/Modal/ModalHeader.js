"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const hi_1 = require("react-icons/hi");
const ModalContext_1 = require("./ModalContext");
const ModalHeader = ({ children }) => {
    const { popup, onClose } = (0, ModalContext_1.useModalContext)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('flex items-start justify-between rounded-t dark:border-gray-600', {
            'p-2': popup,
            'border-b p-5': !popup,
        }), children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl", children: children }, void 0), (0, jsx_runtime_1.jsx)("button", { className: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white", type: "button", onClick: onClose, children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlineX, { className: "h-5 w-5" }, void 0) }, void 0)] }, void 0));
};
exports.ModalHeader = ModalHeader;
