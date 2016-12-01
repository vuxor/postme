import React, { PropTypes } from 'react';

import SinglePostContainer from '../../../components/post/SinglePostContainer';

const SinglePost = (props) => (
  <div className="row">
    <div className="col s12 m6">
      <SinglePostContainer id={props.params.id} />
    </div>
  </div>
);

SinglePost.propTypes = {
  params: PropTypes.object.isRequired,
};

export default SinglePost;
