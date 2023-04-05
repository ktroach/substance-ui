import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
const colorClasses = {
    default: 'text-gray-900 dark:text-white',
    blue: 'text-blue-700 dark:text-blue-500',
    red: 'text-red-700 dark:text-red-500',
    green: 'text-green-700 dark:text-green-500',
    yellow: 'text-yellow-500 dark:text-yellow-300',
    purple: 'text-purple-700 dark:text-purple-500',
};
export const Label = ({ children, color = 'default', className, ...props }) => (_jsx("label", { className: classNames('text-sm font-medium', colorClasses[color], className), ...props, children: children }, void 0));
