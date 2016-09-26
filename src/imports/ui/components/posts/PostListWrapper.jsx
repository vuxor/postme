import React, { Component, PropTypes } from 'react';

import PostListContainer from './PostListContainer.jsx';

export default class PostListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      skip: 0,
      hitLimit: false,
      loading: true,
    };
    this.increment = this.increment.bind(this);
    this.setParams = this.setParams.bind(this);
    this.hitLimitHandle = this.hitLimitHandle.bind(this);
    this.loadingHandle = this.loadingHandle.bind(this);
  }
  componentWillMount() {
    this.setState({
      limit: this.increment(),
    });
  }
  setParams() {
    const inc = this.increment();
    this.setState({
      limit: this.state.limit + inc,
      skip: this.state.skip + inc,
    });
  }
  increment() {
    return this.props.perPage || 10;
  }
  hitLimitHandle() {
    this.setState({
      hitLimit: true,
    });
  }
  loadingHandle(loading) {
    this.setState({ loading });
  }
  render() {
    return (
      <div className="post-list-wrapper">
        <PostListContainer
          hitLimitFunc={this.hitLimitHandle}
          loadingFunc={this.loadingHandle}
          skip={this.state.skip}
          limit={this.state.limit}
          sub={this.props.sub}
        />
        {(!this.state.hitLimit && !this.state.loading) &&
          <a
            className="load-more waves-effect waves-light btn"
            onClick={() => this.setParams()}
          >
            <i className="material-icons">playlist_add</i>Load More
          </a>
        }
        {this.state.loading &&
          <div className="loading">
            <div className="preloader-wrapper active">
              <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

PostListWrapper.propTypes = {
  perPage: PropTypes.number,
  sub: PropTypes.string.isRequired,
};
