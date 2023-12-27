'use client'
import React, { useContext } from 'react'
import { datos } from './db'
import { TenisContex } from '@/app/context/tenisProvider'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import ProgressSlider from '@/components/carrucel/progress-slider'

export const Slaider = () => {
    const  {idioma}= useContext(TenisContex)
    const datosSlider =( idioma==='esp') ? datos?.esp : datos?.ing;
    const titulo= datosSlider.slaider.titulo;
    const sub1= datosSlider.slaider.subtitulo;
    const items= datosSlider.slaider.items;
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
                    <ProgressSlider items={items} type={'img'}/> 
                </Flex> 
                </Flex>                  
        </Flex>
    </Box>     
        )
}
