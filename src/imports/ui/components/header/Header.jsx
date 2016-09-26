import React, { PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';

const Header = (props) => {
  let list;
  if (props.currentUser) {
    list = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
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
  }
  return (
    <nav className="main-nav">
      <div className="nav-wrapper">
        <a onClick={() => FlowRouter.go('home')} className="brand-logo">Postme</a>
        {list}
      </div>
    </nav>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default Header;
