import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordian';
export const AccordionSingleExample = ({ type, items, collapsible, defaultValue }) => {
    return (_jsxs(Accordion, { type: type, defaultValue: defaultValue, collapsible: collapsible, children: [items.map((item, itemIndex) => (_jsxs(AccordionItem, { value: `item-${itemIndex}`, children: [_jsx(AccordionTrigger, { children: item.trigger }, void 0), _jsx(AccordionContent, { children: item.content }, void 0)] }, void 0))), ";"] }, void 0));
};
