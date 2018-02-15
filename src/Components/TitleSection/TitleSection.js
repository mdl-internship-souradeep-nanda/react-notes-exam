import React from 'react';
import PropTypes from 'prop-types';
import './TitleSection.css';

function TitleSection(props) {
  return (
    <div className="wrapper">
      <div className="title-bar">
        <div className="title">
          {props.noteTitle}
        </div>
        <button className="language-button">
          {props.currentLanguage}
        </button>
      </div>
      <div className="input-wrapper">
        <input
          className="note-title"
          type="text"
          placeholder={props.titlePlaceholder}
        />
      </div>
    </div>
  );
}

TitleSection.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  titlePlaceholder: PropTypes.string.isRequired,
};

export default TitleSection;
