import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';





export function ProviderMantine({ children }: { children: ReactNode }) {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
}