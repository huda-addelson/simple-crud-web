import ButtonCard from '@/components/Button';
import Title from '@/components/Title';
import UserInput from '@/components/UserInput';
import { createPost } from '@/hooks/posts';
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IoHome } from 'react-icons/io5';
import { useMutation } from 'react-query';

export default function CreatePost() {
  const router = useRouter();
  const toast = useToast();
  const { mutate, isSuccess, isLoading } = useMutation(createPost);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate({ post: data });
  };

  useEffect(() => {
    if (isSuccess === true) {
      toast({
        title: `sukses create post`,
        status: 'success',
        isClosable: true,
        position: 'top',
      });
      reset({ body: '', title: '' });
      router.push('/');
    }
  }, [isSuccess]);

  return (
    <Flex direction='column'>
      <Box bg='white' position='sticky' top='0' zIndex='10' boxShadow='md'>
        <Flex align='center' maxW='8xl' m='auto' p='5'>
          <Title text='Create Posts' />
          <Spacer />
          <Link href={`/posts`}>
            <ButtonCard text='Go Home' color='twitter' leftIcon={<IoHome />} />
          </Link>
        </Flex>
      </Box>
      <Container maxW='8xl' py='10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex maxW='xl' direction='column' gap='10'>
            <UserInput
              text='Title'
              register={register('title', {
                required: 'Title input is required',
              })}
              placeholder='Enter Title'
            />
            <Flex direction='column' gap='2'>
              <Heading size='md'>Content</Heading>
              <Textarea
                placeholder='Enter Content'
                size='sm'
                name='content'
                h='150'
                {...register('body', {
                  required: 'Content input is required',
                })}
              />
            </Flex>
            <ButtonCard
              text='Create Post'
              type='submit'
              isLoading={isLoading}
              loadingText='Creating..'
            />
          </Flex>
        </form>
      </Container>
    </Flex>
  );
}
