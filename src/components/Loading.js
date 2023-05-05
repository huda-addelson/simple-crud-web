import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

export default function Loading() {
  return (
    <Flex
      w='100%'
      minH='100vh'
      align='center'
      justify='center'
      direction='column'
      gap='3'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      <Text>Memuat.. Harap Tunggu</Text>
    </Flex>
  );
}
