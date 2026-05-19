import { ChangeEvent } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/core/utils/helpers';

const UiInputFieldVariants = cva(
  'font-normal text-sm placeholder:text-black/50 p-4 max-h-[46px] border rounded-sm transition-colors ease-linear duration-300 text-black bg-white',
  {
    variants: {
      hasError: {
        true: 'border-error',
        false: 'border-border-gray',
      },
    },
    defaultVariants: {
      hasError: false,
    },
  }
);

type BaseProps = VariantProps<typeof UiInputFieldVariants> & {
  type: string;
  placeholder: string;
  value: string;
  className?: string;
  error?: string;
  onChangeValue: (value: string) => void;
};

type UiInputFieldProps = BaseProps & React.HTMLAttributes<HTMLInputElement>;

export const UiInputField = ({
  type,
  placeholder,
  value,
  className,
  error,
  onChangeValue,
  ...props
}: UiInputFieldProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
  };

  return (
    <div className={cn('flex flex-col gap-[10px]', className)}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        {...props}
        className={cn(
          UiInputFieldVariants({ hasError: !!error }),
          'outline-none'
        )}
      />
      {error && (
        <p className="text-error text-sm font-normal leadding-[120%]">
          {error}
        </p>
      )}
    </div>
  );
};
