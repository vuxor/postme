import React, { PropTypes } from 'react';

import HeaderContainer from '../components/header/HeaderContainer.jsx';
import Footer from '../components/footer/Footer.jsx';

const MainLayout = (props) => (
  <div>
    <div>
      <HeaderContainer />
    </div>
    <div className="jumbo"></div>
    <div className="main-area container card-panel">
      {props.main}
    </div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  main: PropTypes.element.isRequired,
};

export default MainLayout;
