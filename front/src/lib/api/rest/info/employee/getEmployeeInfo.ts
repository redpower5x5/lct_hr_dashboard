import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetEmployeeInfoRequest, type GetEmployeeInfoResponse } from './types';

export const getEmployeeInfo = async (
  data: GetEmployeeInfoRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetEmployeeInfoResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: `/api/info/employees/${data.id}`,
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
