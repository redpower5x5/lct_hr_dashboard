import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetEmployeeMetricsResponse, type GetEmployeeMetricsRequest } from './types';

export const getEmployeeMetrics = async (
  data: GetEmployeeMetricsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetEmployeeMetricsResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: `/api/metrics/employee/${data.id}`,
    baseUrl,
    method: HTTPMethods.GET,
    headers
  });
};
