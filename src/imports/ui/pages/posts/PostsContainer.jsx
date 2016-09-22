import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Posts from './Posts.jsx';

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), Posts);
