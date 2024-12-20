import type { UserDataType } from '@features/user';
import { getUsers } from '@features/user';
import { useQuery } from '@tanstack/react-query';

export const useGetUsers = () => {
  return useQuery<UserDataType[], Error>({
    queryKey: ['user'],
    queryFn: getUsers,
  });
};
