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
  return Posts.find({ private: false }, { sort: { createdAt: -1 }, limit });
});
Meteor.publish('Posts.best', (l = 10) => {
  check(l, Number);
  let limit = l;
  const count = Posts.find({ private: false }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({ private: false }, { sort: { votes: -1 }, limit });
});
// eslint-disable-next-line func-names
Meteor.publish('Posts.user.public', function (l = 10) {
  check(l, Number);
  let limit = l;
  const username = Meteor.users.findOne(this.userId).username;
  const count = Posts.find({ $and: [{ private: false }, { owner: username }] }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({ $and: [{ private: false }, { owner: username }] }, { limit });
});
// eslint-disable-next-line func-names
Meteor.publish('Posts.user.private', function (l = 10) {
  check(l, Number);
  let limit = l;
  const username = Meteor.users.findOne(this.userId).username;
  const count = Posts.find({ $and: [{ private: true }, { owner: username }] }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({ $and: [{ private: true }, { owner: username }] }, { limit });
});
