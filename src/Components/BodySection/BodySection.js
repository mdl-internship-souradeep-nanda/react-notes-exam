import React from 'react';
import './BodySection.css';

import clipboard from './clipboard.svg';

import STRINGS from '../../strings.json';

class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      charStyle: '',
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.MAX_LENGTH = 10;
  }
  onTextChange(evt) {
    const count = evt.target.value.length;
    this.setState({
      count,
      charStyle: count === this.MAX_LENGTH ? 'red' : '',
    });
  }
  render() {
    const charString = this.state.count + STRINGS.characters;
    const characterCountStyle = `character-count ${this.state.charStyle}`;
    const bodyTextStyle = `text-body ${this.state.charStyle}`;
    return (
      <div className="wrapper">
        <div className="body-header-wrapper">
          <i className="header-text">{STRINGS.body_header}</i>
          <img src={clipboard} alt="clipboard" />
        </div>
        <div className="text-wrapper">
          <textarea
            type="text"
            className={bodyTextStyle}
            cols="40"
            rows="15"
            placeholder={STRINGS.body_notes_placeholder.join('\n')}
            onChange={this.onTextChange}
            maxLength={this.MAX_LENGTH}
          />
        </div>
        <div className="body-footer">
          <button className="save-button" >{STRINGS.save}</button>
          <div className={characterCountStyle}>{charString}</div>
        </div>
      </div>
    );
  }
}

export default BodySection;
