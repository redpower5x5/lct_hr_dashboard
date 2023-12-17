import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetDepartmentsRequest, type GetDepartmentsResponse } from './types';

export const getDepartments = async (
  data: GetDepartmentsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetDepartmentsResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/info/departments',
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
