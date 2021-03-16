import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';

import { Post } from './Post';
import { fetchPosts } from '../redux/actions';


const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loader = useSelector(state => state.app.loader);
  console.log(loader)

  if (loader) {
    return <CircularProgress/>
  }

  if (posts.length) {
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {posts.map( (post, index) => <Post key={index} post={post}/>)}
    </div>
    );
  }
  return <>
    <Button
      onClick={ () => {
        dispatch(fetchPosts())
      }}
    >
      Get Posts
    </Button>
    <h1>No posts Here</h1>
  </>
}

export default Posts;