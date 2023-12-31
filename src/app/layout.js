import NavBar from '@/components/navbar/navbar'
import './globals.css'
import { Providers } from './providers'
import { HStack } from '@chakra-ui/react'
import Footer from '@/components/footer/footer'
import FootBar from '@/components/footer/footBar'
import { TenisProvider } from './context/tenisProvider'



export const metadata = {
  title: 'Escuela de Tenis',
  description: 'Generated by Javier Visconti',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body >
        <Providers>
          <TenisProvider>
            <NavBar/>
          {children}
          <Footer/>
          <HStack display={{ base: 'flex', md: 'none' }}>
          <FootBar/>
          </HStack>
          </TenisProvider>
        </Providers>
      </body>
    </html>
  )
}
