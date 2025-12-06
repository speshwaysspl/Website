import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import api from '@/lib/api';

type Role = 'user' | 'hr' | 'admin';

type Props = {
  children: ReactNode;
  roles?: Role[];
};

const ProtectedRoute = ({ children, roles = ['admin', 'hr'] }: Props) => {
  const location = useLocation();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setAuthorized(false);
      return;
    }

    const userStr = localStorage.getItem('user');
    try {
      const user = userStr ? JSON.parse(userStr) : undefined;
      if (user?.role && roles.includes(user.role)) {
        setAuthorized(true);
        return;
      }
    } catch {}

    api
      .get('/auth/me', { headers: { 'X-Require-Auth': 'true' } })
      .then((res) => {
        const u = res.data;
        if (u?.role && roles.includes(u.role)) {
          localStorage.setItem('user', JSON.stringify(u));
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      })
      .catch(() => setAuthorized(false));
  }, [roles]);

  if (authorized === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authorized) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

