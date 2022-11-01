import { Autocomplete, autocompleteClasses, TextField } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useState } from 'react';
import useUsers from '../../services/query/api_github/useUsers';
import { Api_Github_Search_User } from '../../types';
import UserGithub from '../CardUserGithub';
import useTimer from '../../hooks/useTimer';
import useDidMountEffect from '../../hooks/useDidMountEffect';

export default function SearchGithubUser({ setLimitApi }) {
  const [searchUser, setSearchUser] = useState('');
  const { data: Users, refetch: GetUsersGithub } = useUsers(
    searchUser,
    setLimitApi
  );
  const [setRestart] = useTimer({
    method: GetUsersGithub,
    initialSeconds: 1
  });

  useDidMountEffect(() => {
    setRestart(true);
  }, [searchUser]);

  return (
    <div>
      <Autocomplete
        disablePortal
        options={Users?.data ? Users.data?.items : []}
        sx={{
          width: { xs: '90%', sm: '68%' },
          height: '100%',
          margin: 'auto',
          color: 'white',
          marginTop: '0.4em',
          [`& .${autocompleteClasses.popupIndicator}`]: {
            transform: 'none'
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') GetUsersGithub();
        }}
        onInputChange={(_, value) => setSearchUser(value)}
        getOptionLabel={(option: Api_Github_Search_User) => option?.login}
        popupIcon={<GitHubIcon />}
        loading
        onMouseDownCapture={(e) => e.stopPropagation()}
        clearOnBlur={false}
        forcePopupIcon
        ListboxProps={{
          style: {
            maxHeight: '50em'
          }
        }}
        onFocus={() => {
          window.scrollTo(0, 400);
        }}
        renderOption={(params, option: Api_Github_Search_User) => (
          <UserGithub profile={{ ...option }} />
        )}
        renderInput={(params) => (
          <TextField {...params} label="Github Users" variant="standard" />
        )}
      />
    </div>
  );
}
