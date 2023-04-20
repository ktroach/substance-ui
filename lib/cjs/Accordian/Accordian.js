"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = exports.Accordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const AccordionPrimitive = __importStar(require("@radix-ui/react-accordion"));
const react_icons_1 = require("@radix-ui/react-icons");
const utils_1 = require("../utils");
// Root component is the Radix AccordionPrimitive.Root
const Accordion = AccordionPrimitive.Root;
exports.Accordion = Accordion;
const AccordionItem = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Item, { ref: ref, className: (0, utils_1.cn)("border-b border-b-slate-200 dark:border-b-slate-700", className), ...props }, void 0)));
exports.AccordionItem = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = react_1.default.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Header, { className: "flex", children: (0, jsx_runtime_1.jsxs)(AccordionPrimitive.Trigger, { ref: ref, className: (0, utils_1.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(react_icons_1.ChevronDownIcon, { className: "h-4 w-4 transition-transform duration-200" }, void 0)] }, void 0) }, void 0)));
exports.AccordionTrigger = AccordionTrigger;
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = react_1.default.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Content, { ref: ref, className: (0, utils_1.cn)("data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all", className), ...props, children: (0, jsx_runtime_1.jsx)("div", { className: "pt-0 pb-4", children: children }, void 0) }, void 0)));
exports.AccordionContent = AccordionContent;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
