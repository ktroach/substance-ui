"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ButtonGroup = ({ children, pill, outline }) => {
    const buttons = (0, react_1.useMemo)(() => react_1.Children.map(children, (child, index) => (0, react_1.cloneElement)(child, {
        pill,
        outline,
        positionInGroup: index === 0
            ? 'start'
            : index === children.length - 1
                ? 'end'
                : 'middle',
    })), [children, outline, pill]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "inline-flex", role: "group", children: buttons }, void 0));
};
ButtonGroup.displayName = 'Button.Group';
exports.default = ButtonGroup;
