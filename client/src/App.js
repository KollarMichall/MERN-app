import { Container, AppBar, Typography } from '@material-ui/core'  
import img from './images/img.png'

const App = () => {
  return (
    <Container maxWidth='lg'>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">App</Typography>
        <img src={img} alt="img" height="60" />
      </AppBar>
    </Container>
  );
}

export default App;
