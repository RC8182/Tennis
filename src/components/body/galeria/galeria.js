'use client'
import { Box, Flex, Heading, } from "@chakra-ui/react";
import { useContext } from "react";
import { Parallax } from "@/components/parallax/parallax";
import { datos } from "./db";
import { TenisContex } from "@/app/context/tenisProvider";


export default function Galeria() {

  const {idioma, imgGaleria}= useContext(TenisContex);
  const datosGaleria =( idioma==='esp') ? datos?.esp : datos?.ing;
  const titulo= datosGaleria.galeria.titulo;

  return (
    <Box backgroundColor={'black'} 
    color={'white'} 
    w={'100%'}
    minW={{base:'300px', lg:'100vw'}}
    minH={{base:'600px', lg:'600px'}}>
    <Box >
      <Flex flexDir={'column'} 
        align={'center'}
        flexWrap={'wrap'}>
        <Heading id="galeria">{titulo}</Heading>        
         {imgGaleria?.map((e,i)=>{
          return <Parallax img={e.url} key={i} />
         })}

      </Flex>
    </Box>
    </Box>
  )
}