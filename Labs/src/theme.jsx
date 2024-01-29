import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6', 
      light: '#757ce8',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b', 
      dark: '#00675b',
      contrastText: '#000',
    },
    error: {
      main: '#f44336', 
    },
    background: {
      default: '#292929', 
      paper: '#f5f5f5',
    },

  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none', 
    },

  },

});

export default theme;