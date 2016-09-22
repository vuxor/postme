import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

const MainLayout = (props) => (
  <div>
    <div>
      Header
    </div>
    <div>
      {props.main}
    </div>
    <div>
      Footer
    </div>
  </div>
);

MainLayout.propTypes = {
  currentUser: PropTypes.object,
  main: PropTypes.element.isRequired,
};

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), MainLayout);
