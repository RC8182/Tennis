'use client'
import React, { useContext } from 'react'
import { datos } from './db'
import { TenisContex } from '@/app/context/tenisProvider'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'


export const Entrenamientos = () => {
    const  {idioma}= useContext(TenisContex)
    const datosEntrenamientos =( idioma==='esp') ? datos?.esp : datos?.ing;
    const titulo= datosEntrenamientos.enternamiento.titulo;
    const sub1= datosEntrenamientos.enternamiento.subtitulo;
    const items= datosEntrenamientos.enternamiento.items;
  return (
    <Box w={'100%'}> 
        <Flex 
            justifyContent={'center'}
            minW={{base:'300px', lg:'100vw'}}
            color={'rgb(0,59,112)'} >
                <Flex align={'center'} flexDir={'column'} >
                <Heading>{titulo}</Heading>
                    {/* <Text margin={'5%'}>{sub1}</Text> */}
                <Flex margin={'5%' }>

                </Flex> 
                </Flex>                  
        </Flex>
    </Box>     
        )
}
