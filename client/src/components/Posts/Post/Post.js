import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './styles.js'
import moment from 'moment'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts.js'

const Post = ({post, setCurrentId}) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <h1>{post.title}</h1>
            <p>{post.message}</p>
            <b>{post.tags.map(tag => `#${tag}`)}</b>
            <Button onClick={() => {setCurrentId(post._id)}}>click</Button>
            <Button size="small" color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    
                   Delete
                </Button>
                <Button size="small" color='primary' onClick={() => dispatch(likePost(post._id))}>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
        </Card>
        // <Card>
        /* <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia> */
            /* <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt)}</Typography>
            </div> */
            /* <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div> */
            /* <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color='primary' onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color='primary' onClick={() => {}}>
                    <DeleteIcon fontSize="small"/>
                   Delete
                </Button>
            </CardActions> */
    // </Card>
        )
}

export default Post
