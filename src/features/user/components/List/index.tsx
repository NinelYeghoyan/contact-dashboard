import { ListItem, ListSkeleton, useGetUsers } from '@features/user';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

type UsersListProps = {
  searchQuery: string;
};

const UsersList: FC<UsersListProps> = ({ searchQuery }) => {
  const { t } = useTranslation();
  const { data: users, isLoading, isError, error } = useGetUsers();
  const isUsersEmpty = users?.length === 0;

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (isLoading) return <ListSkeleton />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <ul className="mt-10 h-[calc(100vh-178px)] overflow-y-auto">
      {isUsersEmpty && (
        <li className="text-sm text-center text-foreground italic">
          {t('allUsersDeletedMessage')}
        </li>
      )}

      {filteredUsers?.length === 0 && !isUsersEmpty && (
        <li className="text-sm text-center text-foreground italic whitespace-pre-line">
          {t('noUserFound')}
        </li>
      )}

      {filteredUsers?.map((user) => {
        return <ListItem user={user} key={user.id} />;
      })}
    </ul>
  );
};

export default UsersList;
