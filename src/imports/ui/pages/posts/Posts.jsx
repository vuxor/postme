import React, { PropTypes, Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <button>Add new post</button>
        <button onClick={() => FlowRouter.go('posts.public')}>Public posts</button>
        <button onClick={() => FlowRouter.go('posts.private')}>Private posts</button>
        <button>Hall of fame</button>
      </div>
    );
  }
}

Posts.propTypes = {
  currentUser: PropTypes.object,
};
