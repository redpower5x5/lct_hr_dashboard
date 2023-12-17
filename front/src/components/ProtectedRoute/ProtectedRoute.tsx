import React, { type FC, type PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';

import { useAuthToken } from '@hooks/useAuthToken';
import { ROUTES } from '@router/routes/constants';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { getAccessToken } = useAuthToken();

  if (!getAccessToken()) {
    return <Navigate to={ROUTES.signIn.path} />;
  }

  return children;
};
