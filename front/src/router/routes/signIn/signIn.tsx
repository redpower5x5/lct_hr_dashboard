import React from 'react';

import { type RouteObject } from 'react-router-dom';

import { SignIn } from '@pages/SignIn';

import { SIGNIN_ROUTE } from './constants';

export const signInRoutes: RouteObject[] = [
  {
    path: SIGNIN_ROUTE.signIn.path,
    element: (
        <SignIn />
    )
  }
];
