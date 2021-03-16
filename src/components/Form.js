import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';

import { createPost } from '../redux/actions';


export const Form = ({createPost}) => {

  const [title, setTitle] = useState('');

  return <>
    <TextField
      fullWidth
      variant="outlined"
      style={{margin: '30px 0px'}}
      value={title}
      onChange={(e) => setTitle(e.target.value) }
    />
    <Button
      color="primary"
      variant="outlined"
      onClick={() => createPost(title)}
      disabled={title.length < 3}
    >
      Submit
    </Button>
  </>
}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(Form)
