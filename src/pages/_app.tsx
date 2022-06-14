import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { AppProvider } from '../hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return     <ChakraProvider theme={theme}> <AppProvider><Component {...pageProps} /> </AppProvider></ChakraProvider>
}

export default MyApp
