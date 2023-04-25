"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionSingleExample = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Accordian_1 = require("./Accordian");
const AccordionSingleExample = ({ type, items, collapsible, defaultValue }) => {
    return ((0, jsx_runtime_1.jsxs)(Accordian_1.Accordion, { type: type, defaultValue: defaultValue, collapsible: collapsible, children: [items.map((item, itemIndex) => ((0, jsx_runtime_1.jsxs)(Accordian_1.AccordionItem, { value: `item-${itemIndex}`, children: [(0, jsx_runtime_1.jsx)(Accordian_1.AccordionTrigger, { children: item.trigger }, void 0), (0, jsx_runtime_1.jsx)(Accordian_1.AccordionContent, { children: item.content }, void 0)] }, void 0))), ";"] }, void 0));
};
exports.AccordionSingleExample = AccordionSingleExample;
