import { FormAction } from '@features/user';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <FormAction />;
}
