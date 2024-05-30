import { useQuery } from '@tanstack/react-query';

import api from '@album/lib/api';
import type { ReactQueryOptions } from '@album/lib/react-query';

interface GetPhotosQueryParams {
  albumId: number;
}

interface BackendResponse {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export function getGetPhotosQuery(params: GetPhotosQueryParams) {
  const queryKey = ['get-photos', params];
  const queryFn = async () => {
    const response = await api.get(`/photos?albumId=${params.albumId}`);

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

export function useGetPhotosQuery(
  params: GetPhotosQueryParams,
  options: ReactQueryOptions<BackendResponse[]> = {},
) {
  const { queryKey, queryFn } = getGetPhotosQuery(params);

  const query = useQuery({
    queryKey,
    queryFn,
    ...options,
  });

  return query;
}
