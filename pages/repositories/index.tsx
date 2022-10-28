import { CardMedia, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import CardRepositoryGithub from 'components/CardRepositoryGithub';
import useRepositories from 'services/query/api_github/useRepositories';
import Lottie from 'lottie-react';
import backgroundRepo from 'public/background-repo.json';
import { motion, MotionConfig } from 'framer-motion';
import useUser from 'services/query/api_github/useUser';
import UserGithub from 'components/CardUserGithub';

export default function Repositories(props) {
  const router = useRouter();
  const { username } = router.query;
  const { data: Repos } = useRepositories(username);
  const { data: User, refetch } = useUser(username, true);

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <motion.div>
        <UserGithub profile={User?.data} buttonRepo={false} />
      </motion.div>
      {Repos?.data.map((repo, i) => (
        <CardRepositoryGithub repo={repo} key={'repo' + i} />
      ))}
      <Lottie animationData={backgroundRepo} style={{ position: 'relative' }} />
      <Lottie
        animationData={backgroundRepo}
        style={{
          position: 'relative',
          top: '-1em',
          transform: 'rotate(180deg)'
        }}
      />
    </Container>
  );
}
