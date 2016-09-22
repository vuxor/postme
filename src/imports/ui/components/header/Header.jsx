import React, { PropTypes, Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <AccountsUIWrapper />
        {this.props.currentUser &&
          <div>
            <button onClick={() => FlowRouter.go('/profile')}>Profile</button>
            <button onClick={() => FlowRouter.go('/posts')}>Posts</button>
          </div>
        }
      </div>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object,
};
