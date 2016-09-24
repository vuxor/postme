import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Home from '../../ui/pages/home/Home.jsx';
import ProfileContainer from '../../ui/pages/profile/ProfileContainer.jsx';
import PostsContainer from '../../ui/pages/posts/PostsContainer.jsx';
import UserPublicPosts from '../../ui/pages/posts/public/UserPublicPosts.jsx';
import UserPrivatePosts from '../../ui/pages/posts/private/UserPrivatePosts.jsx';
import UsersBestPosts from '../../ui/pages/posts/best/UsersBestPosts.jsx';

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
    if (!Meteor.userId()) {
      FlowRouter.go('home');
      return;
    }
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
      main: <UserPublicPosts />,
    });
  },
});

FlowRouter.route('/posts/private', {
  name: 'posts.private',
  action() {
    mount(MainLayout, {
      main: <UserPrivatePosts />,
    });
  },
});

FlowRouter.route('/posts/public/best', {
  name: 'posts.public.best',
  action() {
    mount(MainLayout, {
      main: <UsersBestPosts />,
    });
  },
});
