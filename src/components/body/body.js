import { Box, Flex } from '@chakra-ui/react'
import { About } from './about/about'
import { Testimonio } from './testimony/testimonio'
import { Portada } from './portada/portada'
import { Slaider } from './slider/slaider'
import { Entrenamientos } from './entrenamientos/entrenamientos'

export const Body = () => {

  return (
    <Box>    
        <Flex >
        <Portada/>
        </Flex> 

        <Flex marginTop={'1%'}>
          <Entrenamientos/>
        </Flex>
        <Flex marginTop={'1%'} direction={'column'} align={'center'}>
          <Slaider/>
        </Flex>

        <Flex marginTop={'1%'}>
          <Testimonio/>
        </Flex>

        <Flex marginTop={'1%'}>
          <About/>
        </Flex>

    </Box>
  )
}
