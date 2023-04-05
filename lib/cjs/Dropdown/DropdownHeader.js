"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DropdownDivider_1 = require("./DropdownDivider");
const DropdownHeader = ({ children }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200", children: children }, void 0), (0, jsx_runtime_1.jsx)(DropdownDivider_1.DropdownDivider, {}, void 0)] }, void 0));
exports.DropdownHeader = DropdownHeader;
