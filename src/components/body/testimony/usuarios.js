import React from 'react'
import { Testimonial, TestimonialAvatar, TestimonialContent, TestimonialHeading, TestimonialText } from './testimony'
import { Box } from '@chakra-ui/react';

export const Usuarios = (props) => {
    const text= props.text;
    const name= props.name;
    const title= props.title;
    const avatar= props.avatar;
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
          src={
            {avatar}
          }
          name={name}
          title={title}
        />
      </Testimonial>
    </Box>
  )
}
