import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-4xl font-bold">{t('welcomeContactManager')}</h3>

      <ul className="mt-4">
        <li>✨ {t('addNewUsersToYourNetwork')}</li>
        <li>✏️ {t('editDetailsInFewClicks')}</li>
        <li>🗑️ {t('deleteContactsNoNeed')}</li>
        <li>🔍 {t('searchAnyoneSeconds')}</li>
      </ul>
    </div>
  );
}
