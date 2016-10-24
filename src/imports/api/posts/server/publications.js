import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts.js';
import { check } from 'meteor/check';

Meteor.publish('Posts.public', (l = 10) => {
  check(l, Number);
  let limit = l;
  const count = Posts.find({ isPrivate: false }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({ isPrivate: false }, { sort: { createdAt: -1 }, limit });
});
Meteor.publish('Posts.best', (l = 10) => {
  check(l, Number);
  let limit = l;
  const count = Posts.find({ isPrivate: false }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({ isPrivate: false }, { sort: { votes: -1 }, limit });
});
// eslint-disable-next-line func-names
Meteor.publish('Posts.user.public', function (l = 10) {
  check(l, Number);
  let limit = l;
  if (!this.userId) return this.ready();
  const username = Meteor.users.findOne(this.userId).username;
  const count = Posts.find({ $and: [{ isPrivate: false }, { owner: username }] }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({
    $and: [{
      isPrivate: false,
    }, {
      owner: username,
    }],
  }, {
    sort: {
      createdAt: -1,
    },
    limit,
  });
});
// eslint-disable-next-line func-names
Meteor.publish('Posts.user.private', function (l = 10) {
  check(l, Number);
  let limit = l;
  if (!this.userId) return this.ready();
  const username = Meteor.users.findOne(this.userId).username;
  const count = Posts.find({ $and: [{ isPrivate: true }, { owner: username }] }).count();
  if (limit > count) {
    limit = count;
  }
  return Posts.find({
    $and: [{
      isPrivate: true,
    }, {
      owner: username,
    }],
  }, {
    sort: {
      createdAt: -1,
    },
    limit,
  });
});

// eslint-disable-next-line func-names
Meteor.publish('Posts.singlePost', function (id) {
  check(id, String);
  return Posts.find({ $and: [
    { _id: id },
    { owner: this.userId },
  ] });
});
