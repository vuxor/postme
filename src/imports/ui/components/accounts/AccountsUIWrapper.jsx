import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    this.value = Blaze.render(Template.loginButtons,
      document.getElementById('loginButtons'));
  }
  componentWillUnmount() {
    Blaze.remove(this.value);
  }
  render() {
    return <span id="loginButtons" />;
  }
}
