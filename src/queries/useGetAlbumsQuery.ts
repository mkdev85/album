import { useQuery } from '@tanstack/react-query';

import api from '@album/lib/api';
import type { ReactQueryOptions } from '@album/lib/react-query';

interface GetAlbumsQueryParams {
  userId: number;
}

interface BackendResponse {
  userId: number;
  id: number;
  title: string;
}

export function getGetAlbumsQuery(params: GetAlbumsQueryParams) {
  const queryKey = ['get-albums', params];
  const queryFn = async () => {
    const response = await api.get(`/albums?userId=${params.userId}`);

    if (!response.data) {
      return Promise.reject(response);
    }
    return response.data as BackendResponse[];
  };

  return {
    queryKey,
    queryFn,
  };
}

export function useGetAlbumsQuery(
  params: GetAlbumsQueryParams,
  options: ReactQueryOptions<BackendResponse[]> = {},
) {
  const { queryKey, queryFn } = getGetAlbumsQuery(params);

  const query = useQuery({
    queryKey,
    queryFn,
    ...options,
  });

  return query;
}
