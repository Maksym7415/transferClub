import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import langData from './langData';

const Comment = (props) => {
  const classes = useStyles();


  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <h3>{langData.comment[props.lang]}</h3>
      <Paper className={classes.comment}>
        <textarea placeholder={langData.commentText[props.lang]} className={classes.commentText} onChange={props.handleComment} value={props.comment} />
      </Paper>
    </div>
  );
};

export default Comment;
