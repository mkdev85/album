import { useQuery } from '@tanstack/react-query';

import api from '@album/lib/api';
import type { ReactQueryOptions } from '@album/lib/react-query';

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface BackendResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export function getGetUsersQuery() {
  const queryKey = ['get-users'];
  const queryFn = async () => {
    const response = await api.get('/users');

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

export function useGetUsersQuery(options: ReactQueryOptions<BackendResponse[]> = {}) {
  const { queryKey, queryFn } = getGetUsersQuery();

  const query = useQuery({
    queryKey,
    queryFn,
    ...options,
  });

  return query;
}
