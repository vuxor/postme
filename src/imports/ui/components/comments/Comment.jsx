import React, { PropTypes } from 'react';

const Comment = (props) => (
  <div>
    {props.comment.user}, on
    <p>{props.comment.text}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
