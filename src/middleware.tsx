import React, { ReactNode, useEffect } from 'react';

import { useAppSelector } from './redux/hooks';
import { useNavigate } from 'react-router-dom';
import { SuspenseLoader } from './components';

interface MiddlewareProps {
  children?: ReactNode;
}

const Middleware: React.FC<MiddlewareProps> = ({ children }) => {
  const { isAuthenticated, isLoadingUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoadingUser) return;

    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, isLoadingUser, navigate]);

  if (isLoadingUser) {
    return <SuspenseLoader />;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return null;
};

export default Middleware;
