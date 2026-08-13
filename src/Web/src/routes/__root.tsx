import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import Footer from '../components/Footer';
import Header from '../components/Header';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';

import appCss from '../styles.css?url';
import '@mantine/core/styles.css';

import type { QueryClient } from '@tanstack/react-query';
import { ProviderMantine } from '#/integrations/mantine/provider';
import { ColorSchemeScript } from '@mantine/core';

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name   : 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'QWIZZZ',
      },
    ],
    links: [
      {
        rel : 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
        <HeadContent />
      </head>
      <body>
        <ProviderMantine>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ProviderMantine>
        <TanStackDevtools
          config={ {
            position: 'bottom-right',
          } }
          plugins={ [
            {
              name  : 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ] }
        />
        <Scripts />
      </body>
    </html>
  );
}
