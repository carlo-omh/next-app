import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
// TODO find the proper theme color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F06200',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;