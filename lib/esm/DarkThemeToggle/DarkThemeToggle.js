import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
//import React from 'react';
export const DarkThemeToggle = () => {
    useEffect(() => {
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
    return (_jsxs("button", { id: "theme-toggle", type: "button", className: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5", children: [_jsx(MoonIcon, { id: "theme-toggle-dark-icon", className: "hidden w-5 h-5" }, void 0), _jsx(SunIcon, { id: "theme-toggle-light-icon", className: "hidden w-5 h-5" }, void 0)] }, void 0));
};
