'use client'
import { Box, Button, Flex, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { datos } from './db'
import { TenisContex } from '@/app/context/tenisProvider'
import ProgressSlider from '@/components/carrucel/progress-slider'


export const Testimonio = () => {
    const  {idioma}= useContext(TenisContex)
    const datosTestimonio =( idioma==='esp') ? datos?.esp : datos?.ing;
    const titulo= datosTestimonio.resenias.titulo;
    const sub1= datosTestimonio.resenias.subtitulo;
    const Users= datosTestimonio.resenias.usuarios;

    return (
      <Box w={'100%'}> 
        <Flex 
            justifyContent={'center'}
            minW={{base:'300px', lg:'100vw'}}
            minH={{base:'600px', lg:'600px'}}
            color={'rgb(0,59,112)'} >
                <Flex align={'center'} flexDir={'column'} >
                  <Heading>{titulo}</Heading>
                    <Text margin={'5%'}>{sub1}</Text>
                  <Flex margin={'5%' }>
                    <ProgressSlider items={Users} type={''}/> 
                  </Flex>  
                    
                  <Flex >
                    <Flex className='boton-escribe '
                        margin={2}
                        justifyContent={'center'}
                      >
                      {(idioma === 'esp')?
                        <Button color={'white'} background={'blue'} fontSize={["sm", "md", "lg", "xl"]}>
                            <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,3,,,,'} isExternal>Escribe un comentario</Link>
                        </Button> :
                        <Button color={'white'} background={'blue'} fontSize={["sm", "md", "lg", "xl"]}>
                            <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,3,,,,'} isExternal>Write a comment</Link>
                        </Button>
                      }
            
                    </Flex>

                    <Flex className='boton-ver-mas'
                        margin={2}
                        justifyContent={'center'}>
                        {(idioma === 'esp')?
                          <Button color={'white'} background={'blue'} fontSize={["sm", "md", "lg", "xl"]}>
                            <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,'} isExternal>
                                Todos los comentarios
                            </Link>
                          </Button> :
                          <Button color={'white'} background={'blue'} fontSize={["sm", "md", "lg", "xl"]}>
                            <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,'} isExternal>
                                All Comments
                            </Link>
                            </Button>
                            }
                    </Flex >

                  </Flex>
                      
                </Flex>
              </Flex>
            </Box>     
            )
}
