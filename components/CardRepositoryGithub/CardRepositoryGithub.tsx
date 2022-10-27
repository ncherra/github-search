import { Button, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import useLanguagesByRepo from 'services/query/api_github/useLanguagesByRepo';
import IconDev from 'components/IconDev';

export default function CardRepositoryGithub(props) {
  const { repo } = props;
  const { data: languages, refetch: GetLanguages } = useLanguagesByRepo(
    repo.owner.login,
    repo.name
  );
  console.log(repo.name, languages);

  useEffect(() => {
    setTimeout(() => {
      GetLanguages();
    }, 200);
  }, []);

  return (
    <Container>
      <Typography variant="body2" color="text.secondary">
        Nombre: {repo?.name}
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
      <Typography variant="body2" color="text.secondary">
        Home page: {repo?.homepage}
      </Typography>
      <Button onClick={() => (window.location.href = repo?.html_url)}>
        ir al repo en github
      </Button>
      <Button onClick={() => (window.location.href = repo?.downloads_url)}>
        Descargar
      </Button>
      {languages?.data.length > 0 &&
        languages.data.map((v) => <IconDev name={v} />)}
      <div>
        {languages?.data.length > 0 &&
          languages.data?.map((v) => (
            <Typography
              sx={{ display: 'inline' }}
              variant="body2"
              color="text.secondary"
            >
              {v + ' '}
            </Typography>
          ))}
      </div>
    </Container>
  );
}
