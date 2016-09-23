import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Home from '../../ui/pages/home/Home.jsx';
import ProfileContainer from '../../ui/pages/profile/ProfileContainer.jsx';
import PostsContainer from '../../ui/pages/posts/PostsContainer.jsx';
import PostsPublicContainer from '../../ui/pages/posts/public/PostsPublicContainer.jsx';
import PostsPrivateContainer from '../../ui/pages/posts/private/PostsPrivateContainer.jsx';
import PostsBestContainer from '../../ui/pages/posts/best/PostsBestContainer.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      main: <Home />,
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

FlowRouter.route('/posts/public', {
  name: 'posts.public',
  action() {
    mount(MainLayout, {
      main: <PostsPublicContainer />,
    });
  },
});

FlowRouter.route('/posts/private', {
  name: 'posts.private',
  action() {
    mount(MainLayout, {
      main: <PostsPrivateContainer />,
    });
  },
});

FlowRouter.route('/posts/public/best', {
  name: 'posts.public.best',
  action() {
    mount(MainLayout, {
      main: <PostsBestContainer />,
    });
  },
});
