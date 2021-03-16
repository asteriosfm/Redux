import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Paper,
  Typography,
} from '@material-ui/core';


export const Post = ({post}) => {
  console.log(post)
  return <Container
    style={{width: '450px', display: 'flex', height: '150px', justifyContent: 'center', alignItems: 'center', margin: '30px 0px',}}
    component={Paper}>
    <Typography>{post.title}</Typography>
  </Container>
}
