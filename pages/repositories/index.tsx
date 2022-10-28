import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import CardRepositoryGithub from 'components/CardRepositoryGithub';
import useRepositories from 'services/query/api_github/useRepositories';
import Lottie from 'lottie-react';
import backgroundRepo from 'public/background-repo.json';
import { motion } from 'framer-motion';
import useUser from 'services/query/api_github/useUser';
import UserGithub from 'components/CardUserGithub';
import SearchRepo from 'components/SearchRepo';
import { useState } from 'react';
import { profile } from 'test/data';

export default function Repositories(props) {
  const router = useRouter();
  const { username } = router.query;
  const [repos, setRepos] = useState([]);
  const { data: Repos, error } = useRepositories(username, setRepos);
  const { data: User } = useUser(username, true);

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <motion.div>
        <UserGithub profile={User?.data} />
      </motion.div>
      <SearchRepo repos={Repos?.data} setRepos={setRepos} />
      {repos.length > 0 &&
        repos?.map((repo, i) => (
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
