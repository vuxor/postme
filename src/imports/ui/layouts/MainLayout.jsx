import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from '../components/accounts/AccountsUIWrapper.jsx';

const MainLayout = (props) => (
  <div>
    <div>
      Header
      <AccountsUIWrapper />
    </div>
    <div>
      {props.main}
    </div>
    <div>
      Footer
    </div>
  </div>
);

MainLayout.propTypes = {
  currentUser: PropTypes.object,
  main: PropTypes.element.isRequired,
};

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), MainLayout);
