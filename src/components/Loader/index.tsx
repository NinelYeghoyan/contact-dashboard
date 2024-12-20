import type { FC } from 'react';

const Loader: FC = () => (
  <div className="flex items-center justify-center w-full h-full">
    <span className="w-1 h-1 bg-accent rounded-full animate-single mx-1" />
    <span className="w-1 h-1 bg-accent rounded-full animate-double mx-1" />
    <span className="w-1 h-1 bg-accent rounded-full animate-single mx-1" />
    <span className="w-1 h-1 bg-accent rounded-full animate-double mx-1" />
  </div>
);

export default Loader;
