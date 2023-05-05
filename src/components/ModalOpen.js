import { updatePost } from '@/hooks/posts';
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import ButtonCard from './Button';
import UserInput from './UserInput';

export default function ModalOpen({ isOpen, onClose, data }) {
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.body);

  const { mutate, isLoading, isSuccess } = useMutation(updatePost);
  const toast = useToast();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (postData) => {
    mutate({ id: data.id, post: postData });
  };

  useEffect(() => {
    if (isSuccess == true) {
      toast({
        title: `sukses update post`,
        status: 'success',
        isClosable: true,
        position: 'top',
      });
      reset({ body: '', title: '' });
      onClose();
    }
  }, [isSuccess]);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <ModalContent pt='10' pb='5' px='5' maxW={{ base: '90%', md: 'xl' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalCloseButton />
          <ModalHeader>
            <Center>Edit Post {data.id}</Center>
          </ModalHeader>
          <ModalBody>
            <Flex direction='column' gap='4'>
              <FormControl isInvalid={errors.title}>
                <UserInput
                  text='Title'
                  placeholder='Enter Title'
                  value={title}
                  register={register('title', {
                    required: 'Title input is required.',
                  })}
                  name='title'
                  handleChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                  <FormErrorMessage>{errors.title.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.content}>
                <Flex direction='column' gap='2'>
                  <Heading size='md'>Content</Heading>
                  <Textarea
                    placeholder='Enter Content'
                    defaultValue={content}
                    size='sm'
                    name='content'
                    h='150'
                    onChange={(e) => setContent(e.target.value)}
                    {...register('body', {
                      required: 'Content input is required',
                    })}
                  />
                  {errors.content && (
                    <FormErrorMessage>
                      {errors.content.message}
                    </FormErrorMessage>
                  )}
                </Flex>
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <ButtonCard
              text='Update'
              color='blue'
              type='submit'
              isLoading={isLoading === true}
            />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
