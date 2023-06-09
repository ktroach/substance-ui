import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from "../utils";
// Root component is the Radix AccordionPrimitive.Root
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (_jsx(AccordionPrimitive.Item, { ref: ref, className: cn("border-b border-b-slate-200 dark:border-b-slate-700", className), ...props }, void 0)));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (_jsx(AccordionPrimitive.Header, { className: "flex", children: _jsxs(AccordionPrimitive.Trigger, { ref: ref, className: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className), ...props, children: [children, _jsx(ChevronDownIcon, { className: "h-4 w-4 transition-transform duration-200" }, void 0)] }, void 0) }, void 0)));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (_jsx(AccordionPrimitive.Content, { ref: ref, className: cn("data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all", className), ...props, children: _jsx("div", { className: "pt-0 pb-4", children: children }, void 0) }, void 0)));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
