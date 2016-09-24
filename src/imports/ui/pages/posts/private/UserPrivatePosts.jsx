import React from 'react';

import PostListWrapper from '../../../components/posts/PostListWrapper.jsx';

const UserPrivatePosts = () => (
  <div>
    <PostListWrapper
      perPage={5}
      sub={'Posts.user.private'}
    />
  </div>
);
export default UserPrivatePosts;
