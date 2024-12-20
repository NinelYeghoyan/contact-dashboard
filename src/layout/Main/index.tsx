import type { FC, ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="h-screen w-[calc(100%-320px)] overflow-y-auto flex flex-col py-[50px] px-[50px]">
      {children}
    </main>
  );
};

export default Main;
