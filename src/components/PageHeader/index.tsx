import Button from '@components/Button';
import { normalizeKey } from '@utils/index';
import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type PageHeaderProps = {
  title: string;
  buttonText: string;
  path?: string;
};

const PageHeader: FC<PageHeaderProps> = memo(
  ({ title = '', buttonText = '', path }) => {
    const { t } = useTranslation();

    return (
      <div className="flex items-center justify-between">
        <h6 className="text-2xl capitalize text-secondary-foreground">
          {t(normalizeKey(title))}
        </h6>

        <Button className="min-w-28 px-0" path={path}>
          {t(normalizeKey(buttonText))}
        </Button>
      </div>
    );
  },
);

export default PageHeader;
