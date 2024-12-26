import { Button, Input } from '@components/index.ts';
import { UsersList } from '@features/user';
import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar: FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <aside className="aside w-[320px] flex flex-col py-[50px] px-4 border-r border-secondary">
      <div className="flex items-center gap-x-2.5">
        <Input
          type="text"
          dimension="large"
          placeholder={t('search')}
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <Button size="large" path="/new">
          {t('new')}
        </Button>
      </div>

      <UsersList searchQuery={searchQuery} />
    </aside>
  );
};

export default Sidebar;
