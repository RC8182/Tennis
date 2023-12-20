
import { TenisContex } from '@/app/context/tenisProvider';
import { Box} from '@chakra-ui/react';
import React, { useContext } from 'react'

export const Llamar = (props) => {
    const {idioma}=useContext(TenisContex)
    const phoneNumber= props.phone;

    return (
      <Box textColor={'white'}>
        {(idioma === 'ing') ?
          <a href={`tel:${phoneNumber}`} ><span style={{whiteSpace: 'nowrap'}}>Call Now</span></a>
          : <a href={`tel:${phoneNumber}`} >Llamar</a>
        }
      </Box>
    )
      }    