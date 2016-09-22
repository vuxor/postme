import React, { PropTypes, Component } from 'react';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <button>Add new post</button>
        <button>Public posts</button>
        <button>Private posts</button>
        <button>Hall of fame</button>
      </div>
    );
  }
}

Posts.propTypes = {
  currentUser: PropTypes.object,
};
