import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
export const Card = ({ children, className, horizontal, imgSrc }) => {
    return (_jsxs("div", { className: classNames('flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800', {
            'flex-col': !horizontal,
            'flex-col md:max-w-xl md:flex-row': horizontal,
        }, className), children: [imgSrc && (_jsx("img", { className: classNames({
                    'rounded-t-lg': !horizontal,
                    'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg': horizontal,
                }), src: imgSrc, alt: "" }, void 0)), _jsx("div", { className: "flex h-full flex-col justify-center gap-4 p-6", children: children }, void 0)] }, void 0));
};
