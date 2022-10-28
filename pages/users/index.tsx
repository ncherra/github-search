import { Container, useMediaQuery, useTheme } from '@mui/material';
import Lottie from 'lottie-react';
import backgroundUsers from 'public/background-users.json';
import githubIcon from 'public/github-logo.json';
import { motion } from 'framer-motion';
import SearchGithubUser from 'components/SearchGithubUser';
import { profile } from 'test/data';
import UserGithub from 'components/CardUserGithub';

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
      {/*     <UserGithub {...profile} /> */}
      <Lottie
        animationData={backgroundUsers}
        style={{ position: 'relative', top: '30vh' }}
      />
    </Container>
  );
}
