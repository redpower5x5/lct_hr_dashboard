import { removeToken } from '../storage/adapters/token.adapter';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const errorHandler = async (error: any, requestData: any) => {
  if ([401].includes(error?.response?.status) && requestData?.retryOnError) {
    await removeToken();
    window.location.pathname = '/signIn';
  }
};
