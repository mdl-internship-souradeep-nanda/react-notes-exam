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
    };
    this.MAX_LENGTH = 10;
    this.nodeBody = '';
  }
  onTextChange = (evt) => {
    const count = evt.target.value.length;
    this.nodeBody = evt.target.value;
    this.setState({
      count,
      charStyle: count === this.MAX_LENGTH ? 'red' : '',
    });
  }

  handleSaveButton = () => {
    this.props.addNoteBody(this.nodeBody);
  }

  render() {
    const charString = (this.MAX_LENGTH - this.state.count) + this.props.charactersLabelText;
    const characterCountStyle = `character-count ${this.state.charStyle}`;
    const bodyTextStyle = `text-body ${this.state.charStyle}`;
    return (
      <div className="body-section-wrapper">
        <div className="body-header-wrapper">
          <i className="header-text">{this.props.bodyHeader}</i>
          <img className="clipboard-img" src={clipboard} alt="clipboard" />
        </div>
        <div className="text-wrapper">
          <textarea
            type="text"
            className={bodyTextStyle}
            cols="40"
            rows="15"
            placeholder={this.props.bodyNotesPlaceholder.join('\n')}
            onChange={this.onTextChange}
            maxLength={this.MAX_LENGTH}
          />
        </div>
        <div className="body-footer">
          <div className="save-button-wrapper">
            <button onClick={this.handleSaveButton} className="save-button" >{this.props.saveButtonText}</button>
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
  addNoteBody: PropTypes.func.isRequired,
};

export default BodySection;
