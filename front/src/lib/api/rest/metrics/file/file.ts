import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetFileResponse, type GetFileRequest } from './types';

export const getExcelFile = async (
  data: GetFileRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetFileResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: `/api/metrics/employee/${data.id}/export_excel_file`,
    baseUrl,
    method: HTTPMethods.GET,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });
};
