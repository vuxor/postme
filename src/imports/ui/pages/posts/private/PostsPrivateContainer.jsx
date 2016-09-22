import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import PostsPrivate from './PostsPrivate.jsx';

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), PostsPrivate);
