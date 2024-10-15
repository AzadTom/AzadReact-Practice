import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface UseFetchDataProps {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: any;
  params?: any;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetchData = <T = unknown>({
  url,
  method = 'GET',
  body = null,
  headers = {},
  params = {},
}: UseFetchDataProps): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const config: AxiosRequestConfig = {
        url,
        method,
        headers,
        params,
        data: body,
      };
      const response = await axios(config);
      setData(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url, method, body, headers, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetchData;
