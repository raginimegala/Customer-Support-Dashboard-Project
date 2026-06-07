import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';

import { lazy, Suspense } from 'react';

import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import DashBoardLayout from '@/Layouts/DashBoardLayout/DashBoardLayout';

import { ROUTES } from '@/Routes/RoutesPath';

const LoginPage = lazy(() => import('@/Pages/Login/LoginPage'));
const DashboardPage = lazy(() => import('@/Pages/DashBoard/DashboardPage'));
const NotFoundPage = lazy(() => import('@/Pages/NotFound/NotFoundPage'));

import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <AuthLayout />,

    children: [
      {
        index: true,
        element: <LoginPage />
      }
    ]
  },
  {
    path: ROUTES.DASHBOARD,
    element: (
      <ProtectedRoute>
        <DashBoardLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <DashboardPage />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to={ROUTES.LOGIN} />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
