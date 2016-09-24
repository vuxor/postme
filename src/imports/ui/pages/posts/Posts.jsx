import React, { PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const Posts = () => (
  <div>
    <button>Add new post</button>
    <button onClick={() => FlowRouter.go('posts.public')}>Public posts</button>
    <button onClick={() => FlowRouter.go('posts.private')}>Private posts</button>
  </div>
);

Posts.propTypes = {
  currentUser: PropTypes.object,
};

export default Posts;
