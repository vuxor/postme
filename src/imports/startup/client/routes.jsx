import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import HomeContainer from '../../ui/pages/home/HomeContainer.jsx';
import ProfileContainer from '../../ui/pages/profile/ProfileContainer.jsx';
import PostsContainer from '../../ui/pages/posts/PostsContainer.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      main: <HomeContainer />,
    });
  },
});

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
    mount(MainLayout, {
      main: <ProfileContainer />,
    });
  },
});

FlowRouter.route('/posts', {
  name: 'posts',
  action() {
    mount(MainLayout, {
      main: <PostsContainer />,
    });
  },
});
