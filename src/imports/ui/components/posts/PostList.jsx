import React, { PropTypes } from 'react';

export default class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? 'Loading...' : 'All data loaded'}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array,
  loading: PropTypes.bool,
};
