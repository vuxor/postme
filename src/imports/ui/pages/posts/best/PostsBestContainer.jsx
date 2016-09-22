import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import PostsBest from './PostsBest.jsx';

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), PostsBest);
