import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Posts } from './posts';

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

export const insertPost = new ValidatedMethod({
  name: 'posts.insert',
  validate: new SimpleSchema({
    postData: { type: Object },
    'postData.title': { type: String },
    'postData.text': { type: String },
    'postData.url': { type: String },
    'postData.isPrivate': { type: Boolean },
  }).validator(),
  run({ postData }) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized',
        'You must be loged in to preform this action');
    }

    Posts.insert({
      title: postData.title,
      text: postData.text,
      url: postData.url,
      isPrivate: postData.isPrivate,
      owner: Meteor.users.findOne(this.userId).username,
      votes: 0,
      voters: [],
      comments: [],
      createdAt: new Date(),
    });
  },
});

export const updatePost = new ValidatedMethod({
  name: 'posts.update',
  validate: new SimpleSchema({
    postData: { type: Object },
    'postData.title': { type: String },
    'postData.text': { type: String },
    'postData.url': { type: String },
    'postData.isPrivate': { type: Boolean },
    'postData.postId': { type: String },
  }).validator(),
  run({ postData }) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized',
        'You must be loged in to preform this action');
    }

    Posts.update(postData.postId, {
      $set: {
        title: postData.title,
        text: postData.text,
        url: postData.url,
        isPrivate: postData.isPrivate,
      },
    });
  },
});

export const deletePostMethod = new ValidatedMethod({
  name: 'posts.remove',
  validate: new SimpleSchema({
    postId: { type: String },
  }).validator(),
  run({ postId }) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized',
        'You must be loged in to preform this action');
    }
    Posts.remove(postId);
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
