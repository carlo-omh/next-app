import Link from 'next/link'

// components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <span>--</span>
          </IconButton>
          <Typography variant="h6" >
            <img src="https://omh.sg/themes/omh/assets/images/logo.svg" alt="Ohmyhome" />
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <div>Welcome to Next.js!!!!!</div>
      <Link href='/about'><a>About</a></Link>
      <img src="https://z.omh.sg/media/malaysia/home_banner.jpg" />
    </div>
  )
}

export default Home