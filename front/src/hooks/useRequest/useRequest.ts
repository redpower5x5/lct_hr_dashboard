import { useCallback, useEffect, useState } from 'react'

import { request } from '@http'

import { type UseRequestOptions, type UseRequestData } from './types'

export const useRequest = (
  { url, baseUrl, method }: UseRequestData,
  options?: UseRequestOptions
) => {
  const { runOnMount = true, errorHandler } = options ?? {}

  const [isLoading, setIsLoading] = useState(!!runOnMount)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(undefined)

  const runRequest = useCallback(() => {
    request({ url, method, baseUrl })
      .then((res) => {
        setIsError(false)
        setIsLoading(false)
        setData(res.data)
      })
      .catch((e) => {
        setIsLoading(false)
        setIsError(true)

        errorHandler?.(e)
      })
  }, [url, method, baseUrl])

  useEffect(() => {
    setIsLoading(true)

    if (runOnMount) {
      runRequest()
    }
  }, [runRequest, runOnMount])

  return { data, isError, isLoading, runRequest }
}
