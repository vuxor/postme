import React, {PropTypes} from 'react';

const SinglePost = (props) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="#">post link</a>
            <a href="#">Go Back</a>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePost.propTypes = {
  loading: PropTypes.bool.isRequired,
  post: PropTypes.object,
};

export default SinglePost;
