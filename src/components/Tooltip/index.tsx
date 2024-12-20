import { useTooltip } from '@hooks/useTooltip';
import clsx from 'clsx';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, useCallback } from 'react';

type TooltipProps = {
  children: ReactElement;
  content: ReactNode;
  mode?: 'center' | 'right' | 'left';
  className?: string;
};

const getTooltipPosition = (mode: 'center' | 'right' | 'left') =>
  clsx(
    'absolute',
    mode === 'center' && 'left-1/2 transform -translate-x-1/2',
    mode === 'right' && 'right-0',
    mode === 'left' && 'left-0',
  );

const getArrowPosition = (mode: 'center' | 'right' | 'left') =>
  clsx(
    'absolute top-full w-0 h-0 border-t-[10px] border-t-gray-600 border-transparent border-x-[10px]',
    mode === 'center' && 'left-1/2 transform -translate-x-1/2',
    mode === 'right' && 'right-4',
    mode === 'left' && 'left-4',
  );

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  mode = 'center',
  className = '',
}) => {
  const { tooltipRef, showTooltip, toggleTooltip } = useTooltip();

  const handleClick = useCallback(() => {
    toggleTooltip();
  }, [toggleTooltip]);

  return (
    <div ref={tooltipRef} className={clsx('relative inline-block', className)}>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {content}
      </div>

      {showTooltip && (
        <div
          className={clsx(
            'min-w-[160px] absolute bottom-10 z-50 px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg',
            getTooltipPosition(mode),
          )}
        >
          {cloneElement(children, { onCloseTooltip: toggleTooltip })}
          <div className={getArrowPosition(mode)} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
