import { normalizeKey } from '@utils/index';
import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type NotificationProps = {
  text: string;
  className?: string;
  type: 'success' | 'error';
};

const Notification: FC<NotificationProps> = memo(
  ({ text = '', className = '', type = 'success' }) => {
    const { t } = useTranslation();

    return (
      <div
        className={`
        ${className} 
        absolute top-2.5 left-1/2 -translate-x-1/2
        bg-secondary rounded-[10px] shadow-md 
        flex items-center overflow-hidden drop-shadow-lg
      `}
      >
        <div
          className={`${type === 'success' ? 'bg-green' : 'bg-red'} w-5 h-12`}
        />

        <div className="text-center text-secondary-foreground font-medium text-base px-4">
          {t(normalizeKey(text))}
        </div>
      </div>
    );
  },
);

export default Notification;
