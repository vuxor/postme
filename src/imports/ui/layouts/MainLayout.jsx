import React, { PropTypes } from 'react';

import HeaderContainer from '../components/header/HeaderContainer.jsx';

const MainLayout = (props) => (
  <div>
    <div>
      <HeaderContainer />
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
  main: PropTypes.element.isRequired,
};

export default MainLayout;
