import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetEmployeesRequest, type GetEmployeesResponse } from './types';

export const getEmployees = async (
  data: GetEmployeesRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetEmployeesResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/admin/employees',
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
