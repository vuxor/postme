import React, { PropTypes, Component } from 'react';
import { Gravatar } from 'meteor/jparker:gravatar';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.gravatar = this.gravatar.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) FlowRouter.go('home');
  }
  gravatar() {
    if (this.props.currentUser.emails) {
      const email = this.props.currentUser.emails[0].address;
      const md5Hash = Gravatar.hash(email);
      return Gravatar.imageUrl(md5Hash);
    }
    return false;
  }
  render() {
    const { currentUser } = this.props;
    let userData = null;
    if (currentUser) {
      userData = (
        <div>
          <div><img alt="Avatar" src={this.gravatar()} /></div>
          <div>
            <p>Email: <span>{currentUser.emails && currentUser.emails[0].address}</span></p>
            <p>Username: <span>{currentUser.username}</span></p>
            <p>First Name: <span>{currentUser.firstName ? currentUser.firstName : '-'}</span></p>
            <p>Last Name: <span>{currentUser.lastName ? currentUser.lastName : '-'}</span></p>
          </div>
        </div>
      );
    }
    return (
      <div>
        {Meteor.loggingIn() ? 'Loading...' : userData}
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object,
};
