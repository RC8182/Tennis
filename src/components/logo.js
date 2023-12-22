import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import pelota from '../../public/logo.png'
import './logo.css'
export const Logo = (props) => {
    const width= props.width
  return (
    <Flex
    margin={'1%'}  
    width={width}
    alignSelf={'center'}
    style={{filter: {
      invert: 100,
      sepia: 100,
      saturate: 0,
      hueRotate: 146,
      brightness: 1.07,
      contrast: 103
    }}}>
  <Image
    className="logo"
    src={pelota}
    alt="Pelota de tenis"
    width={260}
    height={37}
    priority

  />
</Flex>
  )
}
