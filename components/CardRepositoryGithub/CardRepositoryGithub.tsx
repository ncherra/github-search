import { Button, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import IconDev from 'components/IconDev';
import { motion } from 'framer-motion';

export default function CardRepositoryGithub(props) {
  const { repo } = props;

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <IconDev name={repo.language} />
        <Typography variant="body2" color="text.secondary">
          Nombre: {repo?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Home page: {repo?.homepage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripcion: {repo?.description}
        </Typography>
        <Typography key={'123'} variant="body2" color="text.secondary">
          Creado: {repo?.created_at}
        </Typography>
        <Typography key={'12333'} variant="body2" color="text.secondary">
          Ultima actualizacion: {repo?.pushed_at}
        </Typography>

        <Button onClick={() => (window.location.href = repo?.html_url)}>
          ir al repo en github
        </Button>
        <Button onClick={() => (window.location.href = repo?.downloads_url)}>
          Descargar
        </Button>
      </Container>
    </motion.div>
  );
}
