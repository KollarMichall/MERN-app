import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'  
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import img from './images/img.jpg'
import useStyles from'./styles.js'

const App = () => {
 const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">App</Typography>
        <img className={classes.image} src={img} alt="img" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>

          </Grid>
        </Container>

      </Grow>
    </Container>
  );
}

export default App;
