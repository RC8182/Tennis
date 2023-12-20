import { TenisContex } from '@/app/context/tenisProvider';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useContext } from 'react'

export const Idiomas = () => {
    const{idioma, setIdioma}= useContext(TenisContex);
    const ing=()=>{
        return setIdioma('ing');
    }
    const esp=()=>{
        return setIdioma('esp');
    }
  return (
    <Box textColor={'white'}>
        {(idioma === 'ing')?
        <Link href="#" onClick={esp}>Español?</Link>:
        <Link href="#" onClick={ing}>English?</Link>}
    </Box>
  )
}
