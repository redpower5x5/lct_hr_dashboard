import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetPeriodsRequest, type GetPeriodsResponse } from './types';

export const getPeriods = async (
  data: GetPeriodsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetPeriodsResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/info/periods',
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
