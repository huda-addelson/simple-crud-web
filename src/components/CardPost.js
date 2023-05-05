import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  HStack,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import ButtonCard from './Button';
import ModalOpen from './ModalOpen';

export default function CardPost({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        w='full'
        h='full'
        direction='column'
        rounded={'sm'}
        overflow={'hidden'}
        bg='white'
        border={'1px'}
        borderColor='black'
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <ModalOpen isOpen={isOpen} onClose={onClose} data={data} />
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1} w='80%'>
            {data.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={3} mt='5' mb='10'>
            {data.body}
          </Text>
        </Box>
        <Spacer />
        <HStack borderTop={'1px'} color='black'>
          <Flex w='full' px='4' py='2'>
            <Link href={`/posts/${data.id}`}>
              <ButtonCard variant='outline' text='View More' color='blue' />
            </Link>
            <Spacer />
            <ButtonCard
              variant='solid'
              text='Edit'
              color='green'
              leftIcon={<BiEdit />}
              handleClick={() => onOpen()}
            />
          </Flex>
        </HStack>
      </Flex>
    </>
  );
}
