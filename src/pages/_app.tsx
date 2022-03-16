import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { theme } from '../../styles/theme'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container maxW={1180}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
