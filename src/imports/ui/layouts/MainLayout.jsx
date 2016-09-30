import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router';

import HeaderContainer from '../components/header/HeaderContainer.jsx';
import Footer from '../components/footer/Footer.jsx';

class MainLayout extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      if (!!nextProps.children.props.route.onEnter) {
        if (nextProps.children.props.route.onEnter.name === 'requireLogin') {
          this.props.router.replace('/');
        }
      }
    }
  }
  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="jumbo"></div>
        <div className="main-area container card-panel">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  currentUser: PropTypes.object,
  router: PropTypes.object,
};

export default createContainer(() => (
  {
    currentUser: Meteor.user(),
  }
), withRouter(MainLayout));
