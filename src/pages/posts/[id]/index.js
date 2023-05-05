import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { detailPost } from '@/hooks/posts';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Link from 'next/link';
import Loading from '@/components/Loading';

export default function DetailPost() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ['detail-post'],
    queryFn: () => detailPost(id),
    cacheTime: 1000,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex direction='column'>
      <Box bg='white' boxShadow='md' p='5'>
        <Container maxW='8xl' cursor='pointer' _hover={{ color: 'blue.300' }}>
          <Link href={`/`}>
            <Flex align='center' gap='2'>
              <FaArrowCircleLeft />
              Back Home
            </Flex>
          </Link>
        </Container>
      </Box>
      <Container maxW='8xl' py='10'>
        <Flex maxW='4xl' direction='column' gap='3'>
          <Heading as='h1' size='lg'>
            Id : {data?.id}
          </Heading>
          <Heading as='h2' size='xl'>
            {data?.title}
          </Heading>
          <Text size='md' color='blackAlpha.900'>
            {data?.body}
          </Text>
          <Heading>User Id : {data?.userId}</Heading>
        </Flex>
      </Container>
    </Flex>
  );
}
