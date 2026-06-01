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
    <div className={cn('mx-auto w-full max-w-(--max-width)', className)}>
      {children}
    </div>
  );
};
