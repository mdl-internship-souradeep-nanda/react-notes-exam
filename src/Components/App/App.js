import React from 'react';
import './App.css';

import Header from '../Header/Header';
import TitleSection from '../TitleSection/TitleSection';
import BodySection from '../BodySection/BodySection';
import Footer from '../Footer/Footer';
import SavedNote from '../SavedNote/SavedNote';

import STRINGS from '../../strings.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
      page_key: STRINGS.PAGE_KEYS.HOME_PAGE,
      notes: [
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
      ],
    };
    this.titleFieldHandle = null;
    this.bodyTextHandle = null;
  }

  getTitleSectionJsx = strings => (
    <div className="App-title-container">
      <TitleSection
        noteTitle={strings.note_title}
        titlePlaceholder={strings.title_placeholder}
        currentLanguage={strings.current_language}
        onLanguageButtonClick={this.toggleLanguage}
        setTitleField={this.setTitleField}
      />
    </div>
  )

  getBodySectionJsx = strings => (
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
  )

  getSavedNotesSectionJsx = () => {
    const notesJsx = this.state.notes.map((note, id) => {
      const noteKey = `note_${id}`;
      return <SavedNote key={noteKey} title={note.title} body={note.body} />;
    });
    return (
      <div className="App-notes-container" >
        {notesJsx}
      </div>
    );
  }

  setTitleField = (dom) => {
    this.titleFieldHandle = dom;
  }

  setBodyTextHandle = (dom) => {
    this.bodyTextHandle = dom;
  }


  toggleLanguage = () => {
    // this.setState(prevState => ({
    //   language: prevState.language === 'english' ? 'thai' : 'english',
    // }));
  }

  footerCallback = () => {
    if (this.state.page_key === STRINGS.PAGE_KEYS.SAVED_NOTES_PAGE) {
      this.setState({
        page_key: STRINGS.PAGE_KEYS.HOME_PAGE,
      });
    }
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
    this.setState({
      page_key: STRINGS.PAGE_KEYS.SAVED_NOTES_PAGE,
    });
  }

  render() {
    // console.log(this.state.notes);
    const strings = STRINGS[this.state.language];
    const isHomePage = this.state.page_key === STRINGS.PAGE_KEYS.HOME_PAGE;

    return (
      <div className="App-wrapper">
        <Header title={strings.header_title[this.state.page_key]} />
        {isHomePage ? this.getTitleSectionJsx(strings) : null}
        {isHomePage ? this.getBodySectionJsx(strings) : null}
        {isHomePage ? null : this.getSavedNotesSectionJsx()}
        <Footer title={strings.footer_title[this.state.page_key]} callback={this.footerCallback} />
      </div>
    );
  }
}

export default App;
