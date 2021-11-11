import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'  
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import img from './images/img.jpg'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">App</Typography>
        <img src={img} alt="img" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>

          </Grid>
        </Container>

      </Grow>
    </Container>
  );
}

export default App;
