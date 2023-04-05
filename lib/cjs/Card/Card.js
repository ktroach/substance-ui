"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Card = ({ children, className, horizontal, imgSrc }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800', {
            'flex-col': !horizontal,
            'flex-col md:max-w-xl md:flex-row': horizontal,
        }, className), children: [imgSrc && ((0, jsx_runtime_1.jsx)("img", { className: (0, classnames_1.default)({
                    'rounded-t-lg': !horizontal,
                    'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg': horizontal,
                }), src: imgSrc, alt: "" }, void 0)), (0, jsx_runtime_1.jsx)("div", { className: "flex h-full flex-col justify-center gap-4 p-6", children: children }, void 0)] }, void 0));
};
exports.Card = Card;
