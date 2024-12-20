import { Main, Sidebar } from '@layout/index.tsx';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex">
        <Sidebar />

        <Main>
          <Outlet />
        </Main>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
