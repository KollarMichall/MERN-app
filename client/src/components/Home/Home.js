import React from 'react'
import { AppBar, Typography, Grid, Grow, Container } from '@material-ui/core'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';
import Posts from '../Posts/Posts.js'
import Form from '../Form/Form.js'
import img from '../../images/img.jpg'



import useStyles from'./styles.js'


const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

    return ( <>
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
      </>
    )
}

export default Home
