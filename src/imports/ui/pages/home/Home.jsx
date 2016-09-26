import React from 'react';

import PostListWrapper from '../../components/posts/PostListWrapper.jsx';

const Home = () => (
  <div>
    <h2 className="header">Latest posts</h2>
    <PostListWrapper
      perPage={10}
      sub={'Posts.public'}
    />
  </div>
);
export default Home;
