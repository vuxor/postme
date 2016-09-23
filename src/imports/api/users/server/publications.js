import { Meteor } from 'meteor/meteor';

Meteor.publish('Meteor.users.name', function namePublication() {
  return Meteor.users.find(this.userId, { fields: { firstName: 1, lastName: 1 } });
});
