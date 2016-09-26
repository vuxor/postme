import React, { PropTypes } from 'react';

const Comment = (props) => (
  <div className="card-panel">
    <div className="comment-header">{props.comment.user}, on</div>
    <div className="comment-body">{props.comment.text}</div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
