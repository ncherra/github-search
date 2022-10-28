import { TextField } from '@mui/material';
import { Container } from '@mui/system';
import { setConfig } from 'next/config';
import React, { useEffect, useState } from 'react';
import { Api_Github_Repo } from 'types';

interface ISearchRepo {
  repos: Api_Github_Repo[];
  setRepos: (...args: any[]) => void;
}
export default function SearchRepo({ repos, setRepos }: ISearchRepo) {
  const [search, setSearch] = useState('');
  const [copyRepos, setcopyRepos] = useState(repos);

  useEffect(() => {
    if (!copyRepos && repos) {
      setcopyRepos([...repos]);
      return;
    }
    if (copyRepos) {
      if (search.length > 1) {
        const filter = copyRepos.filter((repo) =>
          repo.name.toLowerCase().includes(search.toLowerCase())
        );
        setRepos([...filter]);
      } else setRepos([...copyRepos]);
    }
  }, [search]);

  return (
    <Container
      sx={{
        margin: 'auto',
        textAlign: 'center',
        marginTop: '2em'
      }}
    >
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        sx={{
          width: '50%'
        }}
        label={'Buscar en los repositorios'}
        value={search}
        variant="standard"
      />
    </Container>
  );
}
