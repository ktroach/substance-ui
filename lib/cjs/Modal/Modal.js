"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const ModalHeader_1 = require("./ModalHeader");
const ModalBody_1 = require("./ModalBody");
const ModalFooter_1 = require("./ModalFooter");
const ModalContext_1 = require("./ModalContext");
const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
};
const ModalComponent = ({ children, show, popup, size = '2xl', onClose }) => ((0, jsx_runtime_1.jsx)(ModalContext_1.ModalContext.Provider, { value: { popup, onClose }, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('fixed right-0 left-0 top-4 z-50 h-modal items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full', {
            'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80': show,
            hidden: !show,
        }), "aria-hidden": !show, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('relative h-full w-full px-4 md:h-auto', sizeClasses[size]), children: (0, jsx_runtime_1.jsx)("div", { className: "relative rounded-lg bg-white shadow dark:bg-gray-700", children: children }, void 0) }, void 0) }, void 0) }, void 0));
ModalComponent.displayName = 'Modal';
ModalHeader_1.ModalHeader.displayName = 'Modal.Header';
ModalBody_1.ModalBody.displayName = 'Modal.Body';
ModalFooter_1.ModalFooter.displayName = 'Modal.Footer';
exports.Modal = Object.assign(ModalComponent, { Header: ModalHeader_1.ModalHeader, Body: ModalBody_1.ModalBody, Footer: ModalFooter_1.ModalFooter });
