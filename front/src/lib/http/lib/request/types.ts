import { type AxiosRequestConfig } from 'axios';

import { type HTTPMethods } from '../../constants';

export interface RequestData {
  url: string
  baseUrl: string
  method: HTTPMethods
  data?: Record<string, any>
  params?: Record<string, any>
  headers?: Record<string, string>
  onUploadProgress?: AxiosRequestConfig['onUploadProgress']
  responseType?: AxiosRequestConfig['responseType']
}
