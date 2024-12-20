import { Button, Loader, PageHeader, Tooltip } from '@components/index.ts';
import { Trash, useDeleteUser, useGetUser } from '@features/user';
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/$userId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      userId: params.userId,
    };
  },
});

function RouteComponent() {
  const { t } = useTranslation();
  const { userId } = Route.useLoaderData();
  const { data: user, isLoading } = useGetUser(userId);
  const { mutate } = useDeleteUser();

  if (isLoading) return <Loader />;

  return (
    <>
      <PageHeader title="contactDetails" buttonText="home" path="/" />

      <div key={user?.id} className="flex items-start gap-x-4 mt-7">
        <div className="w-[140px] h-[140px] rounded-xl overflow-hidden bg-gray-600">
          <img
            src={user?.image}
            alt={user?.username}
            className="w-full object-cover"
          />
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-secondary-foreground capitalize">
            {user?.name}
          </h4>

          <h6 className="text-base font-extralight text-accent py-1">
            {user?.username}
          </h6>

          <p className="text-sm">{user?.description}</p>

          <div className="flex items-center gap-x-2 mt-2.5">
            <Button
              variant="secondary"
              size="small"
              path={`/users/${userId}/edit`}
            >
              {t('edit')}
            </Button>

            <Tooltip
              content={
                <Button variant="destructive" size="small">
                  {t('delete')}
                </Button>
              }
            >
              <Trash onDeleteUser={() => mutate(user!.id)} />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
