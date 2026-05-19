import { PropsWithChildren } from 'react';

import { cn } from '@/core/utils/helpers';

type ContainerProps = {
  className?: string;
};

export const Container = ({
  children,
  className,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[var(--max-width)] px-1 lg:px-41',
        className
      )}
    >
      {children}
    </div>
  );
};
