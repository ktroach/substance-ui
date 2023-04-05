"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkThemeToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const solid_1 = require("@heroicons/react/solid");
//import React from 'react';
const DarkThemeToggle = () => {
    (0, react_1.useEffect)(() => {
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        if (localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon?.classList.remove('hidden');
        }
        else {
            themeToggleDarkIcon?.classList.remove('hidden');
        }
        const themeToggleBtn = document.getElementById('theme-toggle');
        const listener = () => {
            themeToggleDarkIcon?.classList.toggle('hidden');
            themeToggleLightIcon?.classList.toggle('hidden');
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
                else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            }
            else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
                else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        };
        themeToggleBtn?.addEventListener('click', listener);
        return () => themeToggleBtn?.removeEventListener('click', listener);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("button", { id: "theme-toggle", type: "button", className: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5", children: [(0, jsx_runtime_1.jsx)(solid_1.MoonIcon, { id: "theme-toggle-dark-icon", className: "hidden w-5 h-5" }, void 0), (0, jsx_runtime_1.jsx)(solid_1.SunIcon, { id: "theme-toggle-light-icon", className: "hidden w-5 h-5" }, void 0)] }, void 0));
};
exports.DarkThemeToggle = DarkThemeToggle;
