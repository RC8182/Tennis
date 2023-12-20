'use client'
import { Box, Flex, Heading, Stack, Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { datos } from './db'
import { TenisContex } from '@/app/context/tenisProvider'

export const About = () => {
  const {idioma}=useContext(TenisContex);
  const datosAbout =( idioma==='esp') ? datos?.esp : datos?.ing;
  const titulo= datosAbout.about.titulo;
  const texto= datosAbout.about.texto;
  return (
    <Box backgroundColor={'rgb(175, 199, 38)'} 
    color={'white'} 
    w={'100%'}
    minW={{base:'300px', lg:'100vw'}}
    minH={{base:'600px', lg:'600px'}}>
    <Box margin={'5%'}>
      <Stack spacing={0} align={'center'}>
        <Heading id='sobre-nosotros'>{titulo}</Heading>
        <Flex marginTop={'3%'}>
          <Text>{texto}</Text>
        </Flex>        
    </Stack>
    </Box>
    </Box>    
  )
}
