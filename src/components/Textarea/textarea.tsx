import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';
import { memo } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: 'primary' | 'secondary' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Textarea = memo<TextareaProps>(
  ({ variant = 'secondary', size = 'medium', className = '', ...rest }) => {
    const textareaClasses = clsx(
      'w-full py-2 outline-none font-roboto transition ease-in-out duration-200',
      variant === 'primary' &&
        'bg-primary text-primary-foreground placeholder:text-primary-foreground',
      variant === 'secondary' &&
        'bg-secondary text-secondary-foreground placeholder:text-secondary-foreground',
      variant === 'disabled' &&
        'pointer-events-none touch-none bg-gray-300 text-gray-500 placeholder:text-gray-500',
      size === 'small' && 'text-xs rounded placeholder:text-xs px-3',
      size === 'medium' && 'text-sm rounded-md placeholder:text-sm px-3.5',
      size === 'large' && 'text-base rounded-lg placeholder:text-base px-4',
      className,
    );

    return (
      <div>
        <textarea className={textareaClasses} {...rest} rows={6} />
      </div>
    );
  },
);

export default Textarea;
