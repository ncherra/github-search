import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container, GlobalStyles, ThemeProvider } from '@mui/material';
import { themeDark } from 'Theme';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react';
import githubLoad from 'public/github-load.json';
import { motion } from 'framer-motion';
import darkScrollbar from '@mui/material/darkScrollbar';
import '../public/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
    };
    const handleComplete = (url) => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  useEffect(() => {
    setLoading(true);
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <ThemeProvider theme={themeDark}>
      <QueryClientProvider client={queryClient}>
        {loading ? (
          <Container maxWidth="md">
            <Lottie animationData={githubLoad} />
          </Container>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Head>
              <title>Github Search</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <GlobalStyles styles={{ ...darkScrollbar() }} />
          </motion.div>
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
