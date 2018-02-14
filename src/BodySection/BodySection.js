import React from 'react';
import './BodySection.css';

import clipboard from './clipboard.svg';

import STRINGS from '../strings.json';

function BodySection() {
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
        />
      </div>
      <div className="body-footer">
        <button className="save-button" >{STRINGS.save}</button>
        <div className="character-count">{STRINGS.characters}</div>
      </div>
    </div>
  );
}

export default BodySection;
