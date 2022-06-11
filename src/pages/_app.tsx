import * as React from 'react';

import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { AppProvider } from '../hooks';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
