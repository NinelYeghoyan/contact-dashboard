import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import { memo } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'email' | 'password';
  variant?: 'primary' | 'secondary' | 'disable';
  dimension?: 'small' | 'medium' | 'large';
  className?: string;
};

const Input = memo<InputProps>(
  ({
    type = 'text',
    variant = 'secondary',
    dimension = 'medium',
    className = '',
    ...rest
  }) => {
    const inputClasses = clsx(
      'w-full border-none outline-none font-normal placeholder:tracking-wide transition ease-in-out duration-200',
      variant === 'primary' &&
        'bg-primary text-primary-foreground placeholder:text-primary-foreground',
      variant === 'secondary' &&
        'bg-secondary text-secondary-foreground placeholder:text-secondary-foreground',
      variant === 'disable' &&
        'pointer-events-none touch-none bg-gray-300 text-gray-500 placeholder:text-gray-500',
      dimension === 'small' &&
        'h-[26px] text-xs rounded placeholder:text-xs px-3',
      dimension === 'medium' &&
        'h-9 text-sm rounded-md placeholder:text-sm px-3.5',
      dimension === 'large' &&
        'h-[38px] text-base rounded-lg placeholder:text-base px-4',
      className,
    );

    return (
      <div className="relative">
        <input type={type} className={inputClasses} {...rest} />
      </div>
    );
  },
);

export default Input;
