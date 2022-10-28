import { Button, CardActionArea, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import IconDev from 'components/IconDev';
import { motion } from 'framer-motion';
import { date } from 'utils';

export default function CardRepositoryGithub(props) {
  const { repo } = props;

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      style={{ marginTop: '2em' }}
      whileTap={{ scale: 0.8 }}
      onTap={() => (window.location.href = repo?.html_url)}
    >
      <Container>
        <CardActionArea>
          {repo?.language && <IconDev name={repo.language} />}
          <Typography
            variant="h5"
            color="text.primary"
            style={{ display: 'inline-block' }}
          >
            {repo?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {repo?.homepage}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {repo?.description}
          </Typography>
          <Typography key={'update'} variant="body2" color="text.secondary">
            {repo?.pushed_at && date(repo?.pushed_at)}
          </Typography>
        </CardActionArea>
      </Container>
    </motion.div>
  );
}
