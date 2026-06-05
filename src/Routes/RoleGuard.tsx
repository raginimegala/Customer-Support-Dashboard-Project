import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

type RoleGuardProps = {
  children: ReactNode;
  allowedRoles: string[];
};

const userRole = 'agent';

const RoleGuard = ({ children, allowedRoles }: RoleGuardProps) => {
  const hasAccess = allowedRoles.includes(userRole);

  return hasAccess ? <>{children}</> : <Navigate to="/Dashboard" replace />;
};
export default RoleGuard;
