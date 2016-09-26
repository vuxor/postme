import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

import PostListWrapper from '../../../components/posts/PostListWrapper.jsx';

class UserPrivatePosts extends Component {
  componentWillMount() {
    if (!this.props.currentUser) FlowRouter.go('home');
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) FlowRouter.go('home');
  }
  render() {
    return (
      <div>
        <h2 className="header">My private posts</h2>
        <PostListWrapper
          perPage={5}
          sub={'Posts.user.private'}
        />
      </div>
    );
  }
}

UserPrivatePosts.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), UserPrivatePosts);
