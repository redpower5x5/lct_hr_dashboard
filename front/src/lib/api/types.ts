import { type RequestData } from '@lib/http/lib/request/types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type APIFunctionOptions<T = {}> = T &
Pick<RequestData, 'baseUrl' | 'headers' | 'onUploadProgress'>
