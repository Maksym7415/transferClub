import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import useStyle from '../styles';

const Comment = (props) => {
  const classes = useStyle()();
  const [comment, setComment] = useState('');

  const handleChange = (e) => setComment(e.target.value);

  return (
    <>
      <h3>Comment</h3>
      <Paper className={classes.comment}>
        <textarea placeholder='Provide your requiqrments, special need' className={classes.commentText} onChange={handleChange} value={comment} />
      </Paper>
    </>
  );
};

export default Comment;
