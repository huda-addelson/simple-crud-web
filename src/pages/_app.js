import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import theme from '@/utils/Theme';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
