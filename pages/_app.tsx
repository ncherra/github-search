import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Container,
  GlobalStyles,
  ThemeProvider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { themeDark } from 'Theme';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react';
import githubLoad from 'public/github-load.json';
import { motion } from 'framer-motion';
import darkScrollbar from '@mui/material/darkScrollbar';
import '../public/global.css';
import Head from 'next/head';
import Cursor from 'components/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const inMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
              ></meta>
            </Head>
            {!inMobile && <Cursor />}
            <Component {...pageProps} />
            <GlobalStyles styles={{ ...darkScrollbar() }} />
          </motion.div>
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
