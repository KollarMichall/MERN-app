import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './styles.js'
import moment from 'moment'
import MoreHorizIconOutlined from '@material-ui/icons/MoreHorizOutlined'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts.js'

const Post = ({post, setCurrentId}) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    return (
   
        <Card className={classes.card}>
         <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia> 
             <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div> 
             <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIconOutlined fontSize="medium"/>
                </Button>
            </div> 
             <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color='primary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltOutlined fontSize="small"/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteOutlined fontSize="small"/>
                   Delete
                </Button>
            </CardActions> 
     </Card>
        )
}

export default Post
