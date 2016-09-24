import React, { PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';

const Header = (props) => (
  <div>
    <AccountsUIWrapper />
    <button onClick={() => FlowRouter.go('posts.public.best')}>Hall of fame</button>
    <button onClick={() => FlowRouter.go('home')}>Home</button>
    {props.currentUser &&
      <div>
        <button onClick={() => FlowRouter.go('profile')}>Profile</button>
        {/* this should be dropdown menu */}
        <button onClick={() => FlowRouter.go('posts')}>My posts</button>
      </div>
    }
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default Header;
