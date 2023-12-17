import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type ProfileRequest, type ProfileResponse } from './types';

export const getProfile = async (
  data?: ProfileRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<ProfileResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/user/profile',
    baseUrl,
    method: HTTPMethods.GET,
    data,
    headers
  });
};
