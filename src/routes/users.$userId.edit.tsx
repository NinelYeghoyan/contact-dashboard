import { FormAction, useGetUser } from '@features/user';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/$userId/edit')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      userId: params.userId,
    };
  },
});

function RouteComponent() {
  const { userId } = Route.useLoaderData();
  const { data: userData } = useGetUser(userId);

  return <FormAction userData={userData} isEditMode />;
}
