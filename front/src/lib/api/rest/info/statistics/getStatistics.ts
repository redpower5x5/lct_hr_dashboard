import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetStatisticsRequest, type GetStatisticsResponse } from './types';

export const getStatistics = async (
  data: GetStatisticsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetStatisticsResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/info/statistics',
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
