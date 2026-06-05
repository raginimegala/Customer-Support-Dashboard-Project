import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

const isAuthenticated = true;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return isAuthenticated ? <> {children} </> : <Navigate to="/login" />;
};

export default ProtectedRoute;
