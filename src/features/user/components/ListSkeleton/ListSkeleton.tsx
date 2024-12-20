import { Skeleton } from '@components/index.ts';
import type { FC } from 'react';

const ListSkeleton: FC = () => {
  const _mockSkeletonList = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ul className="mt-10 h-[calc(100vh-178px)] overflow-y-auto">
      {_mockSkeletonList.map((index) => {
        return (
          <li
            key={index}
            className="w-full h-10 rounded-lg my-1 overflow-hidden"
          >
            <Skeleton />
          </li>
        );
      })}
    </ul>
  );
};

export default ListSkeleton;
