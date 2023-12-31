import { TenisContex } from '@/app/context/tenisProvider';
import {Flex, Link } from '@chakra-ui/react';
import React, { useContext } from 'react'

export const Direccion = () => {
    const {idioma}= useContext(TenisContex);
    return (
      <Flex textColor={'white'}>
        {(idioma === 'ing') ?
          <Link href={`https://www.google.es/maps/dir//28.0289615,-16.5932594/@28.0289197,-16.5930625,20.75z?entry=ttu`} isExternal>Direction</Link>
          : <Link href={`https://www.google.es/maps/dir//28.0289615,-16.5932594/@28.0289197,-16.5930625,20.75z?entry=ttu`} isExternal><span style={{whiteSpace: 'nowrap'}}>Cómo Llegar</span></Link>
        }
      </Flex>
    )
      }    