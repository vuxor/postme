import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';

export default class Header extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
  }
  render() {
    let list;
    let sideMenu;
    if (this.props.currentUser) {
      list = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a onClick={() => FlowRouter.go('posts.public.best')}>Hall of fame</a></li>
          <li><a onClick={() => FlowRouter.go('profile')}>Profile</a></li>
          <li><a onClick={() => FlowRouter.go('posts.public')}>Public posts</a></li>
          <li><a onClick={() => FlowRouter.go('posts.private')}>Private posts</a></li>
          <li><a><AccountsUIWrapper /></a></li>
        </ul>
      );
      sideMenu = (
        <ul id="mobile-nav" className="side-nav">
          <li><a onClick={() => FlowRouter.go('posts.public.best')}>Hall of fame</a></li>
          <li><a onClick={() => FlowRouter.go('profile')}>Profile</a></li>
          <li><a onClick={() => FlowRouter.go('posts.public')}>Public posts</a></li>
          <li><a onClick={() => FlowRouter.go('posts.private')}>Private posts</a></li>
          <li><a><AccountsUIWrapper /></a></li>
        </ul>
      );
    } else {
      list = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a onClick={() => FlowRouter.go('posts.public.best')}>Hall of fame</a></li>
          <li><a><AccountsUIWrapper /></a></li>
        </ul>
      );
      sideMenu = (
        <ul id="mobile-nav" className="side-nav">
          <li><a onClick={() => FlowRouter.go('posts.public.best')}>Hall of fame</a></li>
          <li><a><AccountsUIWrapper /></a></li>
        </ul>
      );
    }
    return (
      <div className="navbar-fixed">
        <nav className="main-nav">
          <div className="nav-wrapper">
            <a onClick={() => FlowRouter.go('home')} className="brand-logo">Postme</a>
            <a
              data-activates="mobile-nav"
              className="button-collapse"
            >
              <i className="material-icons">menu</i>
            </a>
            {list}
            {sideMenu}
          </div>
        </nav>
      </div>
    );
  }
  }

Header.propTypes = {
  currentUser: PropTypes.object,
};
