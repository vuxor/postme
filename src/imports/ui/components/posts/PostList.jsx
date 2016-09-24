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
  componentWillUnmount() {
    // this will remove duplication of data
    // when switch from best to home and oposite
    this.props.handle.stop();
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
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handle: PropTypes.object.isRequired,
};
