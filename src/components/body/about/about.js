'use client'
import { Box, Flex, Heading, Stack, Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { datos } from './db'
import { TenisContex } from '@/app/context/tenisProvider'
import imagen from '../../../../public/profesor.png'
import Image from 'next/image'

export const About = () => {
  const {idioma}=useContext(TenisContex);
  const datosAbout =( idioma==='esp') ? datos?.esp : datos?.ing;
  const titulo= datosAbout.about.titulo;
  const texto= datosAbout.about.texto;
  return (
    // <Box backgroundColor={'rgb(175, 199, 38)'} 
    // color={'rgb(0,59,112)'} 
    // w={'100%'}
    // minW={{base:'300px', lg:'100vw'}}
    // minH={{base:'600px', lg:'600px'}}>
    // <Box margin={'5%'}>
    //   <Stack spacing={0} align={'center'}>
    //     <Heading id='sobre-nosotros'>{titulo}</Heading>
    //     <Flex marginTop={'3%'}>
    //       <Text>{texto}</Text>
    //     </Flex>        
    // </Stack>
    // </Box>
    // </Box>    
<div className="flex flex-col sm:flex-row items-center p-4 rounded-lg" style={{ backgroundColor: 'rgb(175,199,38)' }}>

<div className="order-2 sm:order-1 mr-4">
  <Image src={imagen} alt="Descripción de la imagen" width={500} height={500} />
</div>

<div className="text-center order-1 sm:order-2 mb-4 sm:mb-0" style={{ color: 'rgb(0,59,112)' }}>
  <p className="mb-2 text-4xl font-semibold">
    {titulo}
  </p>
  <p className="text-lg ">
    {texto}
  </p>
</div>

</div>

)
}
