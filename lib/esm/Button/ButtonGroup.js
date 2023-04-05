import { jsx as _jsx } from "react/jsx-runtime";
import { Children, cloneElement, useMemo } from 'react';
const ButtonGroup = ({ children, pill, outline }) => {
    const buttons = useMemo(() => Children.map(children, (child, index) => cloneElement(child, {
        pill,
        outline,
        positionInGroup: index === 0
            ? 'start'
            : index === children.length - 1
                ? 'end'
                : 'middle',
    })), [children, outline, pill]);
    return (_jsx("div", { className: "inline-flex", role: "group", children: buttons }, void 0));
};
ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
