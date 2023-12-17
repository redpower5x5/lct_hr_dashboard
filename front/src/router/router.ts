import { createBrowserRouter } from 'react-router-dom';

import { userRoutes } from '@router/routes';

import { homeRoutes } from './routes/home/home';
import { signInRoutes } from './routes/signIn/signIn';

export const router = createBrowserRouter([
  ...homeRoutes,
  ...signInRoutes,
  ...userRoutes
]);
