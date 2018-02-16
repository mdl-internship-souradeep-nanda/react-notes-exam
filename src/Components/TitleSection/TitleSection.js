import React from 'react';
import PropTypes from 'prop-types';
import './TitleSection.css';

class TitleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content.slice(),
    };
  }
  componentDidMount() {
    this.props.setTitleField(this.titleField);
  }

  /**
   * This function is called when text value changes
   */
  handleChange = (evt) => {
    this.setState({
      content: evt.target.value,
    });
  }

  render() {
    return (
      <div className="TitleSection-wrapper">
        <div className="TitleSection-title-bar">
          <div className="TitleSection-title">
            {this.props.noteTitle}
          </div>
          <button
            className="TitleSection-language-button"
            onClick={this.props.onLanguageButtonClick}
          >
            {this.props.currentLanguage}
          </button>
        </div>
        <div className="TitleSection-input-wrapper">
          <input
            ref={(titleField) => { this.titleField = titleField; }}
            className="TitleSection-note-title"
            type="text"
            placeholder={this.props.titlePlaceholder}
            value={this.state.content}
            onChange={this.handleChange}
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
  content: PropTypes.string.isRequired,
};

export default TitleSection;
