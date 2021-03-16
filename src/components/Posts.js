import React from 'react';
import { connect } from 'react-redux';

import { Post } from './Post';

const Posts = ({posts}) => {
  
  if (posts.length) {
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {posts.map( (post, index) => <Post key={index} post={post}/>)}
    </div>
    )
  }
  return <h1>
    No posts Here
  </h1>
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
  }
};

export default connect(mapStateToProps, null)(Posts);
