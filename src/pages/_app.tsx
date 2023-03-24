import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@/theme'
import { AppPropsWithLayout } from '@/types'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
