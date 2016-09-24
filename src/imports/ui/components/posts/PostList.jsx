import React, { PropTypes } from 'react';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const newList = this.state.listData.concat(nextProps.posts);
    this.setState({
      listData: newList,
    });
  }
  render() {
    const { loading } = this.props;
    const listDataDisplay = (
      this.state.listData.map((post, i) =>
        /* eslint no-underscore-dangle: 0 */
        <div key={post._id}>
          <p><span>{i + 1}. {post.title} - {post._id}</span></p>
          <p>votes: {post.votes}</p>
        </div>
      )
    );
    return (
      <div>
        {listDataDisplay}
        {loading && 'Loading...'}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array,
  loading: PropTypes.bool,
};
