import React from 'react';
import './App.css';

import TitleSection from '../TitleSection/TitleSection';
import BodySection from '../BodySection/BodySection';

import STRINGS from '../../strings.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
    };
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }
  toggleLanguage() {
    this.setState(prevState => ({
      language: prevState.language === 'english' ? 'thai' : 'english',
    }));
  }
  render() {
    const strings = STRINGS[this.state.language];
    return (
      <div className="App">
        <header>
          <strong className="center-span">
            {strings.header_title}
          </strong>
        </header>
        <div className="title-container">
          <TitleSection
            noteTitle={strings.note_title}
            titlePlaceholder={strings.title_placeholder}
            currentLanguage={strings.current_language}
            onLanguageButtonClick={this.toggleLanguage}
          />
        </div>
        <div className="body-container">
          <BodySection
            bodyHeader={strings.body_header}
            bodyNotesPlaceholder={strings.body_notes_placeholder}
            saveButtonText={strings.save_button_text}
            charactersLabelText={strings.characters_label_text}
          />
        </div>
        <footer>
          <strong className="center-span">
            {strings.about_us}
          </strong>
        </footer>
      </div>
    );
  }
}

export default App;
