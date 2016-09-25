import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Posts } from './posts.js';

export const vote = new ValidatedMethod({
  name: 'posts.vote',
  validate: new SimpleSchema({
    postId: { type: String },
  }).validator(),
  run({ postId }) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized',
        'You must be loged in to preform this action');
    }

    Posts.update(postId, {
      $inc: { votes: 1 },
      $addToSet: { voters: this.userId },
    });
  },
});

export const newComment = new ValidatedMethod({
  name: 'posts.newComment',
  validate: new SimpleSchema({
    postId: { type: String },
    text: { type: String },
  }).validator(),
  run({ postId, text }) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized',
        'You must be loged in to preform this action');
    }
    const comment = {
      _id: Random.id(),
      user: Meteor.users.findOne(this.userId).username,
      createdAt: new Date(),
      text,
    };
    Posts.update(postId, {
      $addToSet: { comments: comment },
    });
  },
});
