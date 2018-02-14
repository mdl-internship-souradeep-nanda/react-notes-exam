import React from 'react';
import './BodySection.css';

import clipboard from './clipboard.svg';

import STRINGS from '../strings.json';

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
  onTextChange(event) {
    const evt = event;
    let count = evt.target.value.length;
    let append = '';
    if (count > this.MAX_LENGTH) {
      append = ' red';
      evt.target.value = evt.target.value.slice(0, this.MAX_LENGTH);
      count = this.MAX_LENGTH;
    } else {
      append = '';
    }
    this.setState({
      count,
      charStyle: append,
    });
  }
  render() {
    const charString = this.state.count + STRINGS.characters;
    const characterCountStyle = `character-count${this.state.charStyle}`;
    const bodyTextStyle = `text-body${this.state.charStyle}`;
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
