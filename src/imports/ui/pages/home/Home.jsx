import React, { PropTypes, Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? 'Loading...' : 'All data loaded'}
      </div>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array,
  loading: PropTypes.bool,
};
