import { useEffect } from 'react';
import styled from 'styled-components';
import useUser from 'services/query/api_github/useUser';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Name = styled.p`
  font-size: 3em;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;
const ContainerUserGithub = styled.div`
  margin: auto;
  text-align: center;
`;

interface Props {
  profile: any;
}

export default function UserGithub(profile: any) {
  const { data: User, refetch } = useUser(profile.login);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => refetch(), 500);
  }, []);

  return (
    <motion.div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={profile.avatar_url}
            sx={{ borderRadius: '50%', width: '20em', margin: 'auto' }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              {profile.login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {User?.data.name}
            </Typography>
            {User?.data.email && (
              <Typography variant="body2" color="text.secondary">
                {User?.data.email}
              </Typography>
            )}
            {User?.data.blog && (
              <Typography variant="body2" color="text.secondary">
                {User?.data.blog}
              </Typography>
            )}
            {User?.data.twitter_username && (
              <Typography variant="body2" color="text.secondary">
                Twitter:@{User?.data.twitter_username}
              </Typography>
            )}
            {User?.data.location && (
              <Typography variant="body2" color="text.secondary">
                Lugar: {User?.data.location}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              seguidores: {User?.data.followers}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              siguendo: {User?.data.following}
            </Typography>
            {User?.data.bio && (
              <Typography variant="body2" color="text.secondary">
                Biografia: {User?.data.bio}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              hireable: {User?.data.hireable}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Repositorios publicos: {User?.data.public_repos}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => (window.location.href = profile.html_url)}
          >
            ir a github
          </Button>
          {User?.data.public_repos > 0 && (
            <Button
              size="small"
              color="primary"
              onClick={(e: any) => {
                router.push({
                  pathname: '/repositories',
                  query: { username: profile.login }
                });
                e.stopPropagation();
              }}
            >
              ver repositorios pubilcos
            </Button>
          )}
          {/*         <IconDev name={'f#'} /> */}
        </CardActions>
      </Card>
    </motion.div>
  );
}
