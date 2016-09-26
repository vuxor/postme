import React, { PropTypes } from 'react';
import { moment } from 'meteor/momentjs:moment';

const Comment = (props) => (
  <div className="card-panel">
    <div
      className="comment-header grey-text text-lighten-1"
    >
      {props.comment.user}, posted {moment(props.comment.createdAt).fromNow()}
    </div>
    <div className="comment-body">{props.comment.text}</div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
