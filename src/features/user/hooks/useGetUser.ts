import type { UserDataType } from '@features/user';
import { getUser } from '@features/user';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = (id: string) => {
  return useQuery<UserDataType, Error>({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};
