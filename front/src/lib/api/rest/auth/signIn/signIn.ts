import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type SignInRequest, type SignInResponse } from './types';

export const signIn = async (
  data?: SignInRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<SignInResponse>> => {
  const { baseUrl = '' } = options ?? {};

  return await request({
    url: '/api/user/token',
    baseUrl,
    method: HTTPMethods.POST,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  });
};
