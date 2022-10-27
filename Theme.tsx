import { createTheme } from '@mui/material';

const theme = {
  /*   typography: {
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '2.25em'
    },
    h3: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '32px',
      letteSpacing: '0em'
    },
    h6: { fontSize: '1em' },
    body1: {
      fontSize: '16px'
    }
  } */
};

export const themeLight = createTheme({
  palette: {
    mode: 'light'
  }
});

export const themeDark = createTheme({
  palette: {
    mode: 'dark'
  }
});
