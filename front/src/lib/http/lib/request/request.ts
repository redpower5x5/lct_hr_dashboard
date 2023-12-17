import axios from 'axios';
import { parse, stringify } from 'qs';

import { getRequestURL } from './lib';
import { type RequestData } from './types';

export const axiosInstance = axios.create({
  paramsSerializer: {
    encode: parse as any,
    serialize: stringify as any
  }
});

export const request = async ({
  method,
  url,
  baseUrl,
  data,
  params,
  headers,
  onUploadProgress,
  responseType
}: RequestData) => {
  const requestURL = getRequestURL({ url, baseUrl });

  return await axiosInstance({
    url: requestURL,
    headers,
    method: method as unknown as string,
    data,
    params,
    onUploadProgress,
    responseType
  });
};
