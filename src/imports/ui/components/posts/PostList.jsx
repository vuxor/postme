/* eslint no-underscore-dangle: 0 */
import React, { PropTypes } from 'react';

import PostListItem from './PostListItem.jsx';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
    this.comments = this.comments.bind(this);
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
  comments(post) {
    const num = post.comments.length;
    if (num) {
      if (num === 1) return '1 comment';
      return `${post.comments.length} comments`;
    }
    return 'no comments';
  }
  render() {
    const itemList = (
      this.state.listData.map(post =>
        <PostListItem key={post._id} post={post} />
      )
    );
    return (
      <div>
        {itemList}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  handle: PropTypes.object.isRequired,
  skip: PropTypes.number.isRequired,
};
