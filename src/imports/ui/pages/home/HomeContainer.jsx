import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../../../api/posts/posts.js';

import Home from './Home.jsx';

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.public', 20);
  const loading = !handle.ready();
  let posts = [];
  let users = [];
  if (!loading) {
    posts = Posts.find().fetch();
    users = Meteor.users.find().fetch();
  }
  return {
    posts,
    users,
    loading,
  };
}, Home);
