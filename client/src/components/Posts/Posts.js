import React from 'react';
import Post from './Post/Post'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
  }));

function Posts({ setCurrentId }) {
    const posts = useSelector(state => state.posts)
    const classes = useStyles();
     
    return (
        !posts.length ? <CircularProgress /> : (
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )
    )
}

export default Posts;