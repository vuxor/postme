import React, {PropTypes} from 'react';

export default class PostForm extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="postTitle"
                type="text"
                className="validate"
                required
              />
              <label htmlFor="postTitle">
                Title
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="postText" className="materialize-textarea"></textarea>
              <label htmlFor="postText">Text</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="postUrl"
                type="text"
                className="validate"
                required
              />
              <label htmlFor="postUrl">
                URL
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="checkbox" id="postPrivate" />
              <label htmlFor="postPrivate">Private</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
};
