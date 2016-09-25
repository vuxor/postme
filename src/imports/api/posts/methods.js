import { Meteor } from 'meteor/meteor';
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
