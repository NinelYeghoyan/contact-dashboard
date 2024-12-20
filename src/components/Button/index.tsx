import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'destructive' | 'disable';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  path?: string;
};

const Button = memo<ButtonProps>(
  ({
    children,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    className = '',
    path,
    ...rest
  }) => {
    const linkPadding = clsx(
      size === 'small' && 'px-3',
      size === 'medium' && 'px-3.5',
      size === 'large' && 'px-4',
    );

    const buttonClasses = clsx(
      'flex items-center justify-center font-roboto font-medium border-none transition ease-in-out duration-200 shrink-0',
      variant === 'primary' && 'bg-accent text-accent-foreground',
      variant === 'secondary' && 'bg-secondary text-secondary-foreground',
      variant === 'destructive' && 'bg-destructive text-destructive-foreground',
      variant === 'disable' &&
        'pointer-events-none touch-none bg-gray-300 text-gray-500',
      size === 'small' && 'h-[26px] rounded text-xs',
      size === 'medium' && 'h-9 rounded-md text-sm',
      size === 'large' && 'h-[38px] rounded-lg text-base',
      !path &&
        clsx(
          size === 'small' && 'px-3',
          size === 'medium' && 'px-3.5',
          size === 'large' && 'px-4',
        ),
      className,
    );

    return (
      <button type={type} className={buttonClasses} {...rest}>
        {path ? (
          <Link
            to={path}
            className={clsx(
              'h-full w-full flex items-center justify-center',
              linkPadding,
            )}
          >
            {children}
          </Link>
        ) : (
          children
        )}
      </button>
    );
  },
);

export default Button;
