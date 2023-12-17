import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type UploadListRequest, type UploadListResponse } from './types';

export const uploadList = async (
  data: UploadListRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<UploadListResponse>> => {
  const { baseUrl = '', headers, onUploadProgress } = options ?? {};

  return await request({
    url: '/api/admin/upload/employeelist',
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
