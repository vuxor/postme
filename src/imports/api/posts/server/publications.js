import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts.js';
import { check } from 'meteor/check';

Meteor.publish('Posts.public', (l = 10) => {
  check(l, Number);
  let limit = l;
  const count = Posts.find({ private: false }).count();
  if (limit > count) {
    limit = count;
  }
  const publicPosts = Posts.find({ private: false }, { sort: { createdAt: -1 }, limit });
  const userIds = publicPosts.map((post) => post.userId);
  const users = Meteor.users.find({ _id: { $in: userIds } }, { fields: { username: 1 } });
  return [
    publicPosts,
    users,
  ];
});

Meteor.publish('Posts.user.public', function userPublic(l = 10) {
  check(l, Number);
  let limit = l;
  const count = Posts.find({ $and: [{ private: false }, { userId: this.userId }] }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({ $and: [{ private: false }, { userId: this.userId }] }, { limit });
});
