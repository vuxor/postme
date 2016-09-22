import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Header from './Header.jsx';

const HeaderContainer = (props) => (
  <Header currentUser={props.currentUser} />
);

HeaderContainer.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => ({
  currentUser: Meteor.user(),
}), HeaderContainer);
