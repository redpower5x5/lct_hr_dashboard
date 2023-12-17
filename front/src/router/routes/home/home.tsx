import React from 'react';

import { Home } from 'pages/Home';
import { type RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@component/ProtectedRoute';

import { HOME_ROUTE } from './constants';

export const homeRoutes: RouteObject[] = [
  {
    path: HOME_ROUTE.home.path,
    element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
    )
  }
];
