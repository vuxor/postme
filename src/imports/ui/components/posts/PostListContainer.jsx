import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import PostList from './PostList.jsx';
import { Posts } from '../../../api/posts/posts.js';

export default createContainer((params) => {
  const { sub, limit, skip } = params;
  const handle = Meteor.subscribe(sub, limit);
  const loading = !handle.ready();
  params.loadingFunc(loading);
  let posts = [];
  if (!loading) {
    posts = Posts.find({}, { sort: { createdAt: -1 } }).fetch();
    if (posts.length < limit) {
      params.hitLimitFunc();
    }
  }
  return {
    posts,
    handle,
    skip,
    currentUser: Meteor.user(),
  };
}, PostList);
