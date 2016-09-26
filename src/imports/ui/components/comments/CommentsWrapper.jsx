/* eslint no-underscore-dangle: 0 */
import React, { PropTypes } from 'react';

import Comment from './Comment.jsx';
import NewCommentForm from './NewCommentForm.jsx';

const CommentsWrapper = (props) => (
  <div className="comments-wrapper row">
    {props.post.comments.map(comment =>
      <Comment key={comment._id} comment={comment} />
    )}
    {props.currentUser ? <NewCommentForm postId={props.post._id} /> :
    'Please login to post comment'}
  </div>
);

CommentsWrapper.propTypes = {
  post: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};

export default CommentsWrapper;
