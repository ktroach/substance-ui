import React from 'react';
import { FC, lazy, Suspense, useState } from 'react';
import {
  HiAnnotation,
  HiBadgeCheck,
  HiCollection,
  HiDuplicate,
  HiMenuAlt1,
  HiChartBar,
  HiArrowsExpand,
  HiClock,
  HiArrowCircleDown
} from 'react-icons/hi';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar, SidebarItem, Spinner, DarkThemeToggle } from './lib';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AlertsPage = lazy(() => import('./pages/AlertsPage'));
const AccordionPage = lazy(() => import('./pages/AccordionPage'));
const BadgesPage = lazy(() => import('./pages/BadgesPage'));
const ButtonsPage = lazy(() => import('./pages/ButtonsPage'));
const ButtonGroupPage = lazy(() => import('./pages/ButtonGroupPage'));
const CardPage = lazy(() => import('./pages/CardPage'));
const SpinnersPage = lazy(() => import('./pages/SpinnersPage'));
const TooltipsPage = lazy(() => import('./pages/TooltipsPage'));
const DropdownPage = lazy(() => import('./pages/DropdownPage'));
const ModalPage = lazy(() => import('./pages/ModalPage'));
const LabelsPage = lazy(() => import('./pages/LabelsPage'));

export const AppShell: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const itemsGroups: SidebarItem[][] = [
    [
      {
        group: false,
        icon: HiChartBar,
        title: 'Dashboard',
        href: '/',
      },
      {
        group: false,
        icon: HiClock,
        title: 'Alerts',
        href: '/alerts',
      },
      {
        group: false,
        icon: HiArrowsExpand,
        title: 'Accordion',
        href: '/accordion',
      },
      {
        group: false,
        icon: HiBadgeCheck,
        title: 'Badges',
        href: '/badges',
      },
      {
        group: false,
        icon: HiCollection,
        title: 'Buttons',
        href: '/buttons',
      },
      {
        group: false,
        icon: HiDuplicate,
        title: 'Button group',
        href: '/button-group',
      },
      {
        group: false,
        icon: BsCreditCard2FrontFill,
        title: 'Card',
        href: '/card',
      },
      {
        group: false,
        icon: FaSpinner,
        title: 'Spinners',
        href: '/spinners',
      },
      {
        group: false,
        icon: HiAnnotation,
        title: 'Tooltips',
        href: '/tooltips',
      },
      {
        group: false,
        icon: HiArrowCircleDown,
        title: 'Dropdown',
        href: '/dropdown',
      },    
      {
        group: false,
        icon: HiArrowCircleDown,
        title: 'Modal',
        href: '/modal',
      },  
      {
        group: false,
        icon: HiArrowCircleDown,
        title: 'Label',
        href: '/labels',
      },                  
    ],
  ];

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Navbar>
        <div className="flex items-center">
          <HiMenuAlt1
            className="mr-6 h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => setCollapsed(!collapsed)}
          />
          <span className="text-xl font-semibold dark:text-white">Components</span>
        </div>
        <DarkThemeToggle />
      </Navbar>
      <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar collapsed={collapsed} itemsGroups={itemsGroups} />
        <main className="flex-1 overflow-auto p-4">
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route path="" element={<DashboardPage />} />
              <Route path="alerts" element={<AlertsPage />} />
              <Route path="accordion" element={<AccordionPage />} />
              <Route path="badges" element={<BadgesPage />} />
              <Route path="buttons" element={<ButtonsPage />} />
              <Route path="button-group" element={<ButtonGroupPage />} />
              <Route path="card" element={<CardPage />} />
              <Route path="spinners" element={<SpinnersPage />} />
              <Route path="tooltips" element={<TooltipsPage />} />
              <Route path="dropdown" element={<DropdownPage />} />
              <Route path="modal" element={<ModalPage />} />
              <Route path="labels" element={<LabelsPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};
