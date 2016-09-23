import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts.js';

Meteor.publish('Posts.public', (limit = 10) => {
  const publicPosts = Posts.find({ private: false }, { sort: { createdAt: -1 }, limit });
  const userIds = publicPosts.map((post) => post.userId);
  const users = Meteor.users.find({ _id: { $in: userIds } }, { fields: { username: 1 } });
  return [
    publicPosts,
    users,
  ];
});
