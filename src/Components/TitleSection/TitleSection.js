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
        <button
          className="language-button"
          onClick={props.onLanguageButtonClick}
        >
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
  onLanguageButtonClick: PropTypes.func.isRequired,
};

export default TitleSection;