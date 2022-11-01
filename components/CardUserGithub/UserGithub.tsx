import { useEffect } from 'react';
import useUser from 'services/query/api_github/useUser';
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button,
  CardActionArea,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import IconUser from './Icon';
import { Api_Github_Search_User } from 'types';

interface Props {
  profile: Api_Github_Search_User;
}

export default function UserGithub(props: Props) {
  const { profile } = props;
  const { data: User, refetch } = useUser(profile?.login);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    refetch();
  }, []);
  console.log(router);

  return (
    <CardActionArea
      onClick={(e: any) => {
        if (router.pathname !== '/repositories')
          router.push({
            pathname: '/repositories',
            query: { username: profile.login }
          });
        e.stopPropagation();
      }}
    >
      <CardMedia
        component="img"
        image={profile?.avatar_url}
        sx={{ borderRadius: '50%', width: '20em', margin: 'auto' }}
      />
      <CardContent>
        <div style={{ textAlign: 'center' }}>
          <Button sx={{ margin: 'auto' }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: 'center' }}
              onClick={() => (window.location.href = profile.html_url)}
            >
              {profile?.login}
            </Typography>
          </Button>
        </div>
        {User?.data && (
          <div
            style={{
              margin: 'auto'
            }}
          >
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ textAlign: 'center' }}
            >
              {User?.data.name}
            </Typography>
            {User?.data.bio && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  margin: 'auto',
                  textAlign: 'center',
                  marginTop: '0.5em'
                }}
              >
                {User?.data.bio}
              </Typography>
            )}
            <Container
              sx={{
                display: 'inline-block',
                margin: 'auto',
                position: 'relative',
                left: isMobile ? '' : '44%',
                marginTop: '0.2em',
                width: isMobile ? '70%' : '40%'
              }}
              style={{ padding: 0 }}
            >
              {User?.data.location && (
                <Typography variant="body2" color="text.secondary">
                  <IconUser icon={RoomIcon} />
                  {User?.data.location}
                </Typography>
              )}
              {User?.data.email && (
                <Typography variant="body2" color="text.secondary">
                  <IconUser icon={EmailIcon} />
                  {User?.data.email}
                </Typography>
              )}
              {User?.data.blog && (
                <Typography variant="body2" color="text.secondary">
                  <IconUser icon={LanguageIcon} />
                  {User?.data.blog}
                </Typography>
              )}
              {User?.data.twitter_username && (
                <Typography variant="body2" color="text.secondary">
                  <IconUser icon={TwitterIcon} />@{User?.data.twitter_username}
                </Typography>
              )}
              <Typography variant="body2" color="text.secondary">
                <IconUser icon={GroupsIcon} />
                seguidores: {User?.data.followers}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <IconUser icon={PersonIcon} />
                siguendo: {User?.data.following}
              </Typography>

              {User?.data.hireable && (
                <Typography variant="body2" color="text.secondary">
                  <IconUser icon={WorkIcon} />
                  Contratable {User?.data.hireable}
                </Typography>
              )}
              <Typography variant="body2" color="text.secondary">
                <VisibilityIcon
                  sx={{ verticalAlign: 'bottom', marginRight: '0.4em' }}
                />
                Repositorios publicos: {User?.data.public_repos}
              </Typography>
            </Container>
          </div>
        )}
      </CardContent>
    </CardActionArea>
  );
}
