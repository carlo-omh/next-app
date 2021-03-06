
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" />
        <Typography variant="h6" >
          <img src="https://omh.sg/themes/omh/assets/images/logo.svg" alt="Ohmyhome" />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
