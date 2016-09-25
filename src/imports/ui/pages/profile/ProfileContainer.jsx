import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Profile from './Profile.jsx';

class ProfileContainer extends Component {
  componentWillMount() {
    if (!this.props.currentUser) FlowRouter.go('home');
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) FlowRouter.go('home');
  }
  render() {
    return (
      <Profile currentUser={this.props.currentUser} />
    );
  }
}

ProfileContainer.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('Meteor.users.name');
  return {
    currentUser: Meteor.user(),
  };
}, ProfileContainer);
