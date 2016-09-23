import { Meteor } from 'meteor/meteor';
import { faker } from 'meteor/practicalmeteor:faker';
import { Accounts } from 'meteor/accounts-base';

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
});
