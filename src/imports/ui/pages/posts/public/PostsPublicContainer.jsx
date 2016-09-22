import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import PostsPublic from './PostsPublic.jsx';

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), PostsPublic);
