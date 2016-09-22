import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Profile from './Profile.jsx';

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), Profile);
