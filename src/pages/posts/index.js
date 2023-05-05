import ButtonCard from '@/components/Button';
import CardPost from '@/components/CardPost';
import Title from '@/components/Title';
import { getPosts } from '@/hooks/posts';
import {
  Box,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { MdCreateNewFolder } from 'react-icons/md';
import Link from 'next/link';

export default function ListPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-post'],
    queryFn: () => getPosts(),
  });

  return (
    <Flex direction='column'>
      <Box bg='white' position='sticky' top='0' zIndex='10' boxShadow='md'>
        <Flex align='center' maxW='8xl' m='auto' p='5'>
          <Title text='List Posts' />
          <Spacer />
          <Link href={`/posts/create`}>
            <ButtonCard
              text='Create Post'
              color='facebook'
              leftIcon={<MdCreateNewFolder />}
            />
          </Link>
        </Flex>
      </Box>
      {isLoading ? (
        <Box></Box>
      ) : (
        <Container maxW='8xl' py='10'>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {data.map((post) => (
              <GridItem w='100%' key={post.id}>
                <CardPost data={post} />
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      )}
    </Flex>
  );
}
