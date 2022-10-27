import { CardMedia, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import CardRepositoryGithub from 'components/CardRepositoryGithub';
import useRepositories from 'services/query/api_github/useRepositories';

export default function Repositories(props) {
  const router = useRouter();
  const { username } = router.query;
  const [owner, setOwner] = useState<any>({});
  const { data: Repos } = useRepositories(username, setOwner);

  return (
    <Container>
      <CardMedia
        component="img"
        image={owner?.avatar_url}
        sx={{ borderRadius: '50%', width: '20em' }}
      />
      <Typography variant="body2" color="text.secondary">
        {owner.login}
      </Typography>
      {Repos?.data.map((repo, i) => (
        <CardRepositoryGithub repo={repo} key={'repo' + i} />
      ))}
    </Container>
  );
}
