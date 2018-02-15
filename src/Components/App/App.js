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
      notes: [],
    };
    this.titleFieldHandle = null;
    this.bodyTextHandle = null;
  }

  setTitleField = (dom) => {
    this.titleFieldHandle = dom;
  }

  setBodyTextHandle = (dom) => {
    this.bodyTextHandle = dom;
  }

  addNote = () => {
    if (this.titleFieldHandle && this.bodyTextHandle
      && this.titleFieldHandle.value.length && this.bodyTextHandle.value.length) {
      const note = {
        title: this.titleFieldHandle.value,
        body: this.bodyTextHandle.value,
      };
      this.titleFieldHandle.value = '';
      this.bodyTextHandle.value = '';
      this.setState(prevState => ({
        notes: prevState.notes.concat(note),
      }));
    }
  }

  toggleLanguage = () => {
    this.setState(prevState => ({
      language: prevState.language === 'english' ? 'thai' : 'english',
    }));
  }

  render() {
    console.log(this.state.notes);
    const strings = STRINGS[this.state.language];
    return (
      <div className="App-wrapper">
        <div className="App-header">
          <strong className="App-center-span">
            {strings.header_title}
          </strong>
        </div>
        <div className="App-title-container">
          <TitleSection
            noteTitle={strings.note_title}
            titlePlaceholder={strings.title_placeholder}
            currentLanguage={strings.current_language}
            onLanguageButtonClick={this.toggleLanguage}
            setTitleField={this.setTitleField}
          />
        </div>
        <div className="App-body-container">
          <BodySection
            bodyHeader={strings.body_header}
            bodyNotesPlaceholder={strings.body_notes_placeholder}
            saveButtonText={strings.save_button_text}
            charactersLabelText={strings.characters_label_text}
            setBodyTextHandle={this.setBodyTextHandle}
            onSaveButton={this.addNote}
          />
        </div>
        <div className="App-footer">
          <strong className="App-center-span">
            {strings.about_us}
          </strong>
        </div>
      </div>
    );
  }
}

export default App;
