import Button from '@components/Button';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

type TrashTooltipProps = {
  onCloseTooltip?: () => void;
  onDeleteUser: () => void;
};

const TrashTooltip: FC<TrashTooltipProps> = ({
  onCloseTooltip,
  onDeleteUser,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h6 className="text-xs text-center mb-3">{t('deleteThisUser')}</h6>

      <div className="flex justify-center items-center gap-x-2">
        <Button onClick={onCloseTooltip} size="small" variant="secondary">
          {t('no')}
        </Button>

        <Button onClick={onDeleteUser} size="small" variant="destructive">
          {t('yes')}
        </Button>
      </div>
    </div>
  );
};

export default TrashTooltip;
