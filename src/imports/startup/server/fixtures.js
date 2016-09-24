import { Meteor } from 'meteor/meteor';
import { faker } from 'meteor/practicalmeteor:faker';
import { Accounts } from 'meteor/accounts-base';

import { Posts } from '../../api/posts/posts.js';

// only for development
Accounts.onCreateUser((options, user) => {
  const newUser = user;
  newUser.firstName = faker.name.firstName();
  newUser.lastName = faker.name.lastName();
  return newUser;
});

Meteor.startup(() => {
  if (Meteor.users.find().count() < 5) {
    for (let i = 1; i < 6; i++) {
      Accounts.createUser({
        username: `user${i}`,
        email: `user${i}@example.com`,
        password: 'postme',
      });
    }
  }
  if (Posts.find().count() < 100) {
    const users = Meteor.users.find();
    // eslint-disable-next-line no-underscore-dangle
    const userIds = users.map((user) => user._id);
    const usernames = users.map((user) => user.username);

    const makeComments = () => {
      const comments = [];
      for (let j = 0; j < faker.random.number(5); j++) {
        comments.push({
          user: faker.random.arrayElement(usernames),
          createdAt: new Date(),
          title: faker.lorem.sentence(),
        });
      }
      return comments;
    };

    for (let i = 1; i <= 100; i++) {
      Posts.insert({
        userId: faker.random.arrayElement(userIds),
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
        url: faker.internet.url(),
        votes: faker.random.number(100),
        private: faker.random.boolean(),
        createdAt: new Date(),
        voters: [],
        comments: makeComments(),
      });
    }
  }
});
