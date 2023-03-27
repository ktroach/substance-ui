import React from 'react';
import { FC, lazy, Suspense, useState } from 'react';
import {
  HiAnnotation,
  HiBadgeCheck,
  HiBell,
  HiChevronDoubleRight,
  HiCollection,
  HiCreditCard,
  HiDuplicate,
  HiHome,
  HiMenuAlt1,
} from 'react-icons/hi';
import { BsCreditCard2FrontFill, BsImages } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar, SidebarItem, Spinner } from './components';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AlertsPage = lazy(() => import('./pages/AlertsPage'));
const AccordionPage = lazy(() => import('./pages/AccordionPage'));
const BadgesPage = lazy(() => import('./pages/BadgesPage'));
const BreadcrumbPage = lazy(() => import('./pages/BreadcrumbPage'));
const ButtonsPage = lazy(() => import('./pages/ButtonsPage'));
const ButtonGroupPage = lazy(() => import('./pages/ButtonGroupPage'));
const CardPage = lazy(() => import('./pages/CardPage'));
const SpinnersPage = lazy(() => import('./pages/SpinnersPage'));
const TooltipsPage = lazy(() => import('./pages/TooltipsPage'));

export const AppShell: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const itemsGroups: SidebarItem[][] = [
    [
      {
        group: false,
        icon: HiHome,
        title: 'Dashboard',
        href: '/',
      },
      {
        group: false,
        icon: HiBell,
        title: 'Alerts',
        href: '/alerts',
      },
      {
        group: false,
        icon: HiCreditCard,
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
        icon: HiChevronDoubleRight,
        title: 'Breadcrumb',
        href: '/breadcrumb',
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
          <span className="text-xl font-semibold dark:text-white">Substance Components</span>
        </div>
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
              <Route path="breadcrumb" element={<BreadcrumbPage />} />
              <Route path="buttons" element={<ButtonsPage />} />
              <Route path="button-group" element={<ButtonGroupPage />} />
              <Route path="card" element={<CardPage />} />
              <Route path="spinners" element={<SpinnersPage />} />
              <Route path="tooltips" element={<TooltipsPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};
