import React from 'react';
import { Button } from '@chakra-ui/react';

export default function ButtonCard({
  variant,
  leftIcon,
  color,
  text,
  handleClick,
  type = 'button',
  isLoading = 'false',
  loadingText = 'Updating...',
}) {
  return (
    <Button
      variant={variant}
      leftIcon={leftIcon}
      colorScheme={color}
      onClick={handleClick}
      type={type}
      isLoading={isLoading === true}
      loadingText={loadingText}>
      {text}
    </Button>
  );
}
