import React from 'react';
import './BodySection.css';

import clipboard from './clipboard.svg';

import STRINGS from '../strings.json';

class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      charStyle: 'character-count',
    };
    this.base = 'character-count';
    this.onTextChange = this.onTextChange.bind(this);
  }
  onTextChange(evt) {
    const count = evt.target.value.length;
    let append = '';
    if (count > 10) {
      append = ' red';
    } else {
      append = '';
    }
    this.setState({
      count,
      charStyle: this.base + append,
    });
  }
  render() {
    const charString = this.state.count + STRINGS.characters;
    return (
      <div className="wrapper">
        <div className="body-header-wrapper">
          <i className="header-text">{STRINGS.body_header}</i>
          <img src={clipboard} alt="clipboard" />
        </div>
        <div className="text-wrapper">
          <textarea
            type="text"
            className="text-body"
            cols="40"
            rows="15"
            placeholder={STRINGS.body_notes_placeholder.join('\n')}
            onChange={this.onTextChange}
          />
        </div>
        <div className="body-footer">
          <button className="save-button" >{STRINGS.save}</button>
          <div className={this.state.charStyle}>{charString}</div>
        </div>
      </div>
    );
  }
}

export default BodySection;
