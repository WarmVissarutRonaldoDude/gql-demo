
import { createTheme } from '@mui/material/styles';
import { orange, grey, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: grey[200],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;