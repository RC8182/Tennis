import React from 'react'
import { Testimonial, TestimonialAvatar, TestimonialContent, TestimonialHeading, TestimonialText } from './testimony'
import { Box, Flex } from '@chakra-ui/react';
//import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa"; 

export const Usuarios = ({text, name, title, avatar, star}) => {

  return (
    <Box backgroundColor={'rgb(175, 199, 38)'}
        borderRadius={'15px'}
        color={'white'}
        w={'300px'} >
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading></TestimonialHeading>
          <TestimonialText>
            {text}
          </TestimonialText>
        </TestimonialContent>
        <TestimonialAvatar
          // src={
          //   {avatar}
          // }
          name={name}
          title={title}
        />
        <Flex padding={'5px'} justifyContent={'center'} gap={2}>
          {Array.from({ length: star }, (_, i) => (
            <Flex key={i} >
              <FaTrophy color='blue' />
            </Flex>
          ))}
        </Flex>

      </Testimonial>
    </Box>
  )
}
