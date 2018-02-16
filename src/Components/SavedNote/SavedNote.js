import React from 'react';
import PropTypes from 'prop-types';
import './SavedNote.css';

function SavedNote(props) {
  return (
    <div
      className="SavedNote-wrapper"
      onClick={props.onClick}
      onKeyPress={props.onClick}
      role="button"
      tabIndex={0}
    >
      <div className="SavedNote-title">{props.title}</div>
      <div className="SavedNote-body">
        <pre className="SavedNote-pre">{props.body}</pre>
      </div>
    </div>
  );
}

SavedNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SavedNote;
