import React from 'react';
import PropTypes from 'prop-types';
import './SavedNote.css';

function SavedNote(props) {
  return (
    <div className="SavedNote-wrapper">
      <div className="SavedNote-title">{props.title}</div>
      <div className="SavedNote-body">{props.body}</div>
    </div>
  );
}

SavedNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default SavedNote;
