import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';

const HeaderContainer = (props) => (
  <div>
    <AccountsUIWrapper />
    {props.currentUser &&
      <div>
        <button>Profile</button>
        <button>Posts</button>
      </div>
    }
  </div>
);

HeaderContainer.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => ({
  currentUser: Meteor.user(),
}), HeaderContainer);
