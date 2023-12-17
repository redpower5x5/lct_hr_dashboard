import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type UploadMetricsRequest, type UploadMetricsResponse } from './types';

export const uploadMetrics = async (
  data: UploadMetricsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<UploadMetricsResponse>> => {
  const { baseUrl = '', headers, onUploadProgress } = options ?? {};

  return await request({
    url: '/api/admin/upload/employe_metrics',
    baseUrl,
    method: HTTPMethods.POST,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...headers
    },
    data,
    onUploadProgress
  });
};
