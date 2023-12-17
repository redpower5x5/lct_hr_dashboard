import { HOME_ROUTE } from '@router/routes/home/constants';
import { SIGNIN_ROUTE } from '@router/routes/signIn/constants';
import { USER_ROUTE } from '@router/routes/user/constants';

export const ROUTES = {
  ...HOME_ROUTE,
  ...USER_ROUTE,
  ...SIGNIN_ROUTE
};
