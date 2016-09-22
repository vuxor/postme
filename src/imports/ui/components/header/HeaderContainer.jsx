import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Header from './Header.jsx';

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), Header);
