import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

// route components
import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Home from '../../ui/pages/home/Home.jsx';
import ProfileContainer from '../../ui/pages/profile/ProfileContainer.jsx';
import UserPublicPosts from '../../ui/pages/posts/public/UserPublicPosts.jsx';
import UserPrivatePosts from '../../ui/pages/posts/private/UserPrivatePosts.jsx';
import UsersBestPosts from '../../ui/pages/posts/best/UsersBestPosts.jsx';
import SinglePostContainer from '../../ui/components/post/SinglePostContainer';

const requireLogin = (nextState, replace) => !Meteor.userId() && replace('/');

export const renderRoutes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/profile" component={ProfileContainer} onEnter={requireLogin} />
      <Route path="/posts/public" component={UserPublicPosts} onEnter={requireLogin} />
      <Route path="/posts/private" component={UserPrivatePosts} onEnter={requireLogin} />
      <Route path="/posts/public/best" component={UsersBestPosts} />
      <Route path="/post" component={SinglePostContainer} />
    </Route>
  </Router>;
