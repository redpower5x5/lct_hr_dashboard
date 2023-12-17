import { type AxiosResponse } from 'axios';

import { type UseRequestOptions } from '@hooks/useRequest/types';
import { type APIFunctionOptions } from '@lib/api/types';

export type UseAPIOptions = Omit<UseRequestOptions, 'errorHandler'>

export interface UseAPIData<T, G> {
  apiService: (
    data?: T,
    options?: APIFunctionOptions<any>
  ) => Promise<AxiosResponse<G>>
  requestData?: T
}
