import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/client/index.js';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
