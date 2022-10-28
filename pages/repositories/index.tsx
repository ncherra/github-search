import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import CardRepositoryGithub from 'components/CardRepositoryGithub';
import useRepositories from 'services/query/api_github/useRepositories';
import Lottie from 'lottie-react';
import backgroundRepo from 'public/background-repo.json';
import { motion } from 'framer-motion';
import useUser from 'services/query/api_github/useUser';
import UserGithub from 'components/CardUserGithub';

export default function Repositories(props) {
  const router = useRouter();
  const { username } = router.query;
  const { data: Repos, error: errorRepo } = useRepositories(username);
  const { data: User, error: errorUser } = useUser(username, true);

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      {errorUser !== null && (
        <motion.div>
          <UserGithub profile={User?.data} buttonRepo={false} />
        </motion.div>
      )}
      {errorRepo !== null &&
        Repos?.data.map((repo, i) => (
          <CardRepositoryGithub repo={repo} key={'repo' + i} />
        ))}
      {errorUser !== null && alert('Limite alcanzado de la Api de Github')}
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
