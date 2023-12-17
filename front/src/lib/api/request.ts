import axios, { type AxiosHeaders } from 'axios';

import { config } from './config';
import { errorHandler } from './errorHandler';

interface IRequest {
  url: string
  baseURL?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: Record<string, any>
  params?: Record<string, any>
  headers?: {
    authorization?: boolean
  }
  retryOnError?: boolean
}

interface HTTPHeaders {
  authorization?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const request = async ({ url = '/', method = 'GET', data, params, headers, retryOnError = true }: IRequest) => {
  const headersObject: HTTPHeaders = {};

  if (headers?.authorization && config.authToken) headersObject.authorization = `Bearer ${config.authToken}`;

  return await axios({
    url: `${config.baseURL}${url}`,
    headers: headersObject as AxiosHeaders,
    method,
    data,
    params
  }).catch(async (error) => {
    await errorHandler(error, { url, method, data, params, headers, retryOnError });

    return error;
  });
};
