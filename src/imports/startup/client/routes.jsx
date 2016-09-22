import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { MainLayout } from '../../ui/layouts/MainLayout.jsx';
import HomeContainer from '../../ui/pages/home/HomeContainer.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      main: <HomeContainer />,
    });
  },
});
