import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Profile from './Profile.jsx';

export default createContainer(() => {
  Meteor.subscribe('Meteor.users.name');
  return {
    currentUser: Meteor.user(),
  };
}, Profile);
