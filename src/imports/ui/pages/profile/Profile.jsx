import React, { PropTypes, Component } from 'react';
import { Gravatar } from 'meteor/jparker:gravatar';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.gravatar = this.gravatar.bind(this);
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
          <div className="gravatar"><img alt="Avatar" src={this.gravatar()} /></div>
          <hr />
          <div className="profile-details">
            <ul className="collection">
              <li className="collection-item">
                <span><b>Email:&nbsp;</b></span>
                <span>{currentUser.emails && currentUser.emails[0].address}</span>
              </li>
              <li className="collection-item">
                <span><b>Username:&nbsp;</b></span>
                <span>{currentUser.username}</span>
              </li>
              <li className="collection-item">
                <span><b>First Name:&nbsp;</b></span>
                <span>{currentUser.firstName ? currentUser.firstName : '-'}</span>
              </li>
              <li className="collection-item">
                <span><b>Last Name:&nbsp;</b></span>
                <span>{currentUser.lastName ? currentUser.lastName : '-'}</span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="profile-data">
        {Meteor.loggingIn() ? 'Loading...' : userData}
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object,
};
