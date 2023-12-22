import { Box, Flex } from '@chakra-ui/react'
import { About } from './about/about'
//import Galeria from './galeria/galeria'
import { Testimonio } from './testimony/testimonio'
import { Portada } from './portada/portada'
import SilderImg01 from '../../../public/niños1.png'
import SilderImg02 from '../../../public/pista-arena.png'
import SilderImg03 from '../../../public/chicos.png'
import SilderImg04 from '../../../public/raquetas.png'
import ProgressSlider from '../carrucel/progress-slider'

export const Body = () => {
  const items = [
    {
      img: SilderImg01,
    },
    {
      img: SilderImg02,
    },
    {
      img: SilderImg03,
    },
    {
      img: SilderImg04,
    },
  ]
  return (
    <Box>    
        <Flex >
        <Portada/>
        </Flex> 

        <Flex marginTop={'1%'}>
          {/* <Especialidades/> */}
        </Flex>
        <Flex marginTop={'1%'}>
          <ProgressSlider items={items}/>
        </Flex>

        <Flex marginTop={'1%'}>
          <Testimonio/>
        </Flex>

        <Flex marginTop={'1%'}>
          <About/>
        </Flex>
        <Flex marginTop={'1%'}
        marginBottom={'1%'}>
          {/* <Galeria/> */}
        </Flex>

    </Box>
  )
}
