import type { UserDataType } from '@features/user';
import { Link } from '@tanstack/react-router';
import type { FC } from 'react';

type ListItemProps = {
  user: UserDataType;
};

const ListItem: FC<ListItemProps> = ({ user }) => {
  return (
    <li
      key={user.id}
      className="h-10 rounded-lg my-1 cursor-pointer text-sm overflow-hidden hover:bg-secondary hover:text-secondary-foreground"
    >
      <Link
        to="/$userId"
        className="w-full h-full flex items-center px-4 [&.active]:bg-secondary text-secondary-foreground"
        params={{
          userId: user.id,
        }}
      >
        {user.name}
      </Link>
    </li>
  );
};

export default ListItem;
