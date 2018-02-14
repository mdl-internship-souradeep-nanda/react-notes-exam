import React from 'react';
import './TitleSection.css';

import STRINGS from '../strings.json';

function TitleSection() {
  return (
    <div className="wrapper">
      <div className="title-bar">
        <div className="title">
          {STRINGS.note_title}
        </div>
        <button className="language-button">
          {STRINGS.language}
        </button>
      </div>
      <div className="input-wrapper">
        <input
          className="note-title"
          type="text"
          placeholder={STRINGS.title_placeholder}
        />
      </div>
    </div>
  );
}

export default TitleSection;
