import clsx from 'clsx';
import type { FC } from 'react';

const Skeleton: FC = () => {
  const skeletonClasses = clsx(
    'w-full h-full bg-secondary animate-slide-background',
  );

  return (
    <div
      className={skeletonClasses}
      style={{
        backgroundImage: `linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent)`,
        backgroundPosition: 'left -40px top 0',
        backgroundSize: '40px 100%',
      }}
    />
  );
};

export default Skeleton;
