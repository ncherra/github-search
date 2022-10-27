import { Container, useMediaQuery, useTheme } from '@mui/material';
import Lottie from 'lottie-react';
import backgroundUsers from 'public/background-users.json';
import githubIcon from 'public/github-logo.json';
import { motion } from 'framer-motion';
import SearchGithubUser from 'components/SearchGithubUser';

export default function Home() {
  const theme = useTheme();
  const esMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth={false}>
      <motion.div>
        <Lottie
          animationData={githubIcon}
          style={{
            width: esMobile ? '10em' : '30em',
            margin: 'auto'
          }}
        />
      </motion.div>
      <SearchGithubUser />
      {/*       <UserGithub {...profile} /> */}
      <Lottie
        animationData={backgroundUsers}
        style={{ position: 'relative', top: '30vh' }}
      />
    </Container>
  );
}
