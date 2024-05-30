import type { UserBackendResponse } from '@album/queries/useGetUsersQuery';

export interface UserCardProps {
  userData: UserBackendResponse;
  onClick: () => void;
}
