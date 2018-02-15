import React from 'react';
import './App.css';

import TitleSection from '../TitleSection/TitleSection';
import BodySection from '../BodySection/BodySection';

import STRINGS from '../../strings.json';

function App() {
  return (
    <div className="App">
      <header>
        <strong className="center-span">
          {STRINGS.header_title}
        </strong>
      </header>
      <div className="title-container">
        <TitleSection
          noteTitle={STRINGS.note_title}
          titlePlaceholder={STRINGS.title_placeholder}
          currentLanguage={STRINGS.current_language}
        />
      </div>
      <div className="body-container">
        <BodySection
          bodyHeader={STRINGS.body_header}
          bodyNotesPlaceholder={STRINGS.body_notes_placeholder}
          saveButtonText={STRINGS.save_button_text}
          charactersLabelText={STRINGS.characters_label_text}
        />
      </div>
      <footer>
        <strong className="center-span">
          {STRINGS.about_us}
        </strong>
      </footer>
    </div>
  );
}

export default App;
