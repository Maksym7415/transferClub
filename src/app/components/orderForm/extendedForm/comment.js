import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

const Comment = (props) => {
  const classes = useStyles();


  return (
    <div style={{ width: '100%' }}>
      <h3>Comment</h3>
      <Paper className={classes.comment}>
        <textarea placeholder='Provide your requiqrments, special need' className={classes.commentText} onChange={props.handleComment} value={props.comment} />
      </Paper>
    </div>
  );
};

export default Comment;
