import React from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';

import clipboard from './clipboard.svg';

class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      charStyle: '',
      content: props.content,
    };

    // Maximum allowed text length
    this.MAX_LENGTH = 10;
  }

  componentDidMount() {
    // Send the text input DOM handle to parent
    this.props.setBodyTextHandle(this.textAreaHandle);
  }

  /**
   * This function is called when the save button is pressed
   */
  onSaveButton = () => {
    // Call the parent's save button handler
    this.props.onSaveButton();

    // The parent will clear the text field programatically
    // so call the onTextChange function manually
    this.onTextChange();
  }

  /**
   * This function is called when text is updated
   */
  onTextChange = () => {
    this.nodeBody = this.textAreaHandle.value;
    const count = this.nodeBody.length;

    // Change color based on text length
    this.setState({
      count,
      charStyle: count === this.MAX_LENGTH ? 'BodySection-red' : '',
      content: this.nodeBody,
    });
  }

  render() {
    const charString = `${(this.MAX_LENGTH - this.state.count)} ${this.props.charactersLabelText}`;
    const characterCountStyle = `BodySection-character-count ${this.state.charStyle}`;
    const bodyTextStyle = `BodySection-text-body ${this.state.charStyle}`;
    return (
      <div className="BodySection-wrapper">
        <div className="BodySection-header-wrapper">
          <i className="BodySection-header-text">{this.props.bodyHeader}</i>
          <img className="BodySection-clipboard-img" src={clipboard} alt="clipboard" />
        </div>
        <div className="BodySection-text-wrapper">
          <textarea
            ref={(textAreaHandle) => { this.textAreaHandle = textAreaHandle; }}
            type="text"
            className={bodyTextStyle}
            cols="40"
            rows="15"
            placeholder={this.props.bodyNotesPlaceholder.join('\n')}
            onChange={this.onTextChange}
            maxLength={this.MAX_LENGTH}
            value={this.state.content}
          />
        </div>
        <div className="BodySection-body-footer">
          <div className="BodySection-save-button-wrapper">
            <button onClick={this.onSaveButton} className="BodySection-save-button" >{this.props.saveButtonText}</button>
          </div>
          <div className={characterCountStyle}>{charString}</div>
        </div>
      </div>
    );
  }
}

BodySection.propTypes = {
  charactersLabelText: PropTypes.string.isRequired,
  bodyHeader: PropTypes.string.isRequired,
  saveButtonText: PropTypes.string.isRequired,
  bodyNotesPlaceholder: PropTypes.arrayOf(PropTypes.string).isRequired,
  setBodyTextHandle: PropTypes.func.isRequired,
  onSaveButton: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default BodySection;
