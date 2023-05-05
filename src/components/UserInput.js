import { Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';

export default function UserInput({
  text,
  placeholder,
  value,
  name,
  register,
  handleChange,
}) {
  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>{text}</Heading>
      <Input
        placeholder={placeholder}
        value={value}
        name={name}
        {...register}
        onChange={handleChange}
      />
    </Flex>
  );
}
