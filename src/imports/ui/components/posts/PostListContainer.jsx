import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import PostList from './PostList.jsx';
import { Posts } from '../../../api/posts/posts.js';

export default createContainer((params) => {
  const { sub, limit, skip } = params;
  const handle = Meteor.subscribe(sub, limit);
  const loading = !handle.ready();
  let posts = [];
  let users = [];
  if (!loading) {
    posts = Posts.find({}, {
      skip,
    }).fetch();
    users = Meteor.users.find().fetch();
    if (Posts.find().count() < limit) {
      params.hitLimitFunc();
    }
  }
  return {
    posts,
    users,
    loading,
    handle,
  };
}, PostList);
