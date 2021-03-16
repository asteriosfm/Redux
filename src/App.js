import React from 'react';
import styled from 'styled-components';
import { Container, Paper } from '@material-ui/core';

import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import Form from './components/Form';

function App() {
  return (
    <Container
      style={{
        margin: '100px auto 0px auto',
        maxWidth: '1300px',
      }}
      component={Paper}
      elevation={5}
    >
      <Form/>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Posts/>
        <FetchedPosts/>
      </div>
    </Container>
  );
}

export default App;
