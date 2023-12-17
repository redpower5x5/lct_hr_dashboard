import { type GetRequestURLData } from './types';

export const getRequestURL = ({ url, baseUrl }: GetRequestURLData) => {
  return new URL(url, baseUrl).toString();
};
