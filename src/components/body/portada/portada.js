'use client'
import React, { useContext } from 'react'
import { Box, Flex } from '@chakra-ui/react'
//import { Reservar } from '../../botones/reservas'
import { datos } from './db'
import { TenisContex } from '@/app/context/tenisProvider'
import Image from 'next/image'
import imgPortada from '../../../../public/bolas.png'
import { Logo } from '@/components/logo'



export const Portada = () => {
    const  {idioma, }= useContext(TenisContex)
    const datosPortada =( idioma==='esp') ? datos?.esp : datos?.ing;
    const h1= datosPortada.portada.h1
    const h2= datosPortada.portada.h2

  return (
    <Box w={'100%'}>
        <Box 
        className='fondo' 
        minW={{base:'300px', lg:'100vw'}}
        minH={{base:'600px', lg:'600px'}}
        position={'relative'}
        //backgroundImage={`url(${imgPortada[0]?.url})`}
        backgroundImage={`url(${imgPortada.src})`}
        backgroundColor={'black'}
        backgroundAttachment={'fixed'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        >
            <Box 
                className='contenedor-titulo'
                position={'absolute'}
                left={0}
                top={0}
                width={'100%'}
                height={'100%'}
                backgroundColor={'rgba(44, 42, 42, 0.527)'}
                textAlign={'center'}>
                <Flex flexDir={'column'}>
                    <Flex 
                    margin={'3%'}
                    className='titulo'
                    justifyContent={'center'}
                    color={'white'}
                    padding={'18px'}
                    fontSize={'25px'}
                    flexDir={'column'}
                    letterSpacing={'3px'}
                    >
                    <h2>{h2}</h2>
                    </Flex>
                    <Logo/>
                    <Flex flexDir={'column'} justifyContent={'center'} w={'90%'} margin={'auto'}>
                        {/* <Reservar /> */}
                    </Flex>
                    <Flex 
                        margin={'10%'}
                        padding={'2%'}
                        className='titulo'
                        justifyContent={'center'}
                        color={'white'}
                        fontSize={'25px'}
                        flexDir={'column'}
                        letterSpacing={'3px'}>
                        <h1>{h1}</h1>

                    </Flex>
                   
                </Flex>

            </Box>
        </Box>

        <Flex
             className='seccion'
             height={'auto'}
             alignItems={'center'}
             justifyContent={'center'}
             padding={'0 20'}
             >

        </Flex>
        
    </Box>
  )
}
