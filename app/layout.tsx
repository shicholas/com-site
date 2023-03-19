'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { environment } from '@/relay'
import { Navbar } from '@/components/navbar/Navbar'
import { Footer } from '@/components/Footer'

import { ReactElement } from 'react'

const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue }
  },
  proTheme
)

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <RelayEnvironmentProvider environment={environment}>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <Box minHeight='100%' display='grid' gridTemplateRows='auto 1fr auto'>
                <Navbar />
                {children}
                <Footer />
              </Box>
            </ChakraProvider>
          </CacheProvider>
        </RelayEnvironmentProvider>
      </body>
    </html>
  )
}
