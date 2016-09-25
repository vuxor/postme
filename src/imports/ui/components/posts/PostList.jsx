/* eslint no-underscore-dangle: 0 */
import React, { PropTypes } from 'react';

import PostListItem from './PostListItem.jsx';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    let listData = [];
    if (nextProps.skip === this.props.skip) {
      listData = nextProps.posts;
    } else {
      listData = this.state.listData.concat(
        nextProps.posts.slice(nextProps.skip, nextProps.posts.length)
      );
    }
    this.setState({ listData });
  }
  componentWillUnmount() {
    // this will remove duplication of data
    // when switch from best to home and oposite
    this.props.handle.stop();
  }
  render() {
    return (
      <div>
        {this.state.listData.map(post =>
          <PostListItem key={post._id} post={post} currentUser={this.props.currentUser} />
        )}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  handle: PropTypes.object.isRequired,
  skip: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};
