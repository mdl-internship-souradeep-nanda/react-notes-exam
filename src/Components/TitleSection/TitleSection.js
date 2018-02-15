import React from 'react';
import PropTypes from 'prop-types';
import './TitleSection.css';

class TitleSection extends React.Component {
  componentDidMount() {
    this.props.setTitleField(this.titleField);
  }
  render() {
    return (
      <div className="title-section-wrapper">
        <div className="title-bar">
          <div className="title">
            {this.props.noteTitle}
          </div>
          <button
            className="language-button"
            onClick={this.props.onLanguageButtonClick}
          >
            {this.props.currentLanguage}
          </button>
        </div>
        <div className="input-wrapper">
          <input
            ref={(titleField) => { this.titleField = titleField; }}
            className="note-title"
            type="text"
            placeholder={this.props.titlePlaceholder}
          />
        </div>
      </div>
    );
  }
}

TitleSection.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  titlePlaceholder: PropTypes.string.isRequired,
  onLanguageButtonClick: PropTypes.func.isRequired,
  setTitleField: PropTypes.func.isRequired,
};

export default TitleSection;
