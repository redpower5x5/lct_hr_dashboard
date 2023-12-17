import React from 'react';

import { type RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@component/ProtectedRoute';
import { User } from '@pages/User';

import { USER_ROUTE } from './constants';

export const userRoutes: RouteObject[] = [
  {
    path: USER_ROUTE.user.path,
    element: (
        <ProtectedRoute>
          <User />
        </ProtectedRoute>
    )
  }
];
