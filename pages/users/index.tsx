import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import Lottie from 'lottie-react';
import backgroundUsers from 'public/background-users.json';
import githubIcon from 'public/github-logo.json';
import { motion } from 'framer-motion';
import SearchGithubUser from 'components/SearchGithubUser';
import { fontFamily } from '@mui/system';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <motion.div>
        <Lottie
          animationData={githubIcon}
          style={{
            width: isMobile ? '10em' : '30em',
            margin: 'auto'
          }}
        />
      </motion.div>
      <SearchGithubUser />
      <Lottie
        animationData={backgroundUsers}
        style={{ position: 'relative', top: '30vh' }}
      >
        <Typography
          color="text.secondary"
          variant="h5"
          sx={{
            margin: 'auto',
            textAlign: 'center',
            position: 'absolute',
            top: '80%',
            left: '45%',
            zIndex: -1,
            fontFamily: 'cursive'
          }}
        >
          <motion.div
            animate={{ y: [0, -100, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            ncherra
          </motion.div>
        </Typography>
      </Lottie>
    </Container>
  );
}
