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
        { title: 'title_0', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
        { title: 'title_1', body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ' },
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
      bodyText: '',
      titleText: '',
      currentKey: undefined,
    };
    this.titleFieldHandle = null;
    this.bodyTextHandle = null;
  }

  /**
   * This function accepts the key of the clicked note
   * on the saved notes page and populates the fields of the
   * editor
   * @param key String expected format note_{id}
   */
  onNoteClick = (key) => {
    // Extract the array id from react key.
    const arrayIndex = Number(key.split('note_')[1]);

    // Select the node from the notes array.
    const selectedNote = this.state.notes[arrayIndex];

    // Update the state to reflect the data
    // and set the page to home page.
    this.setState({
      titleText: selectedNote.title,
      bodyText: selectedNote.body,
      page_key: STRINGS.PAGE_KEYS.HOME_PAGE,
      currentKey: arrayIndex,
    });
  }

  /**
   * This function returns the JSX for the title section
   */
  getTitleSectionJsx = strings => (
    <div className="App-title-container">
      <TitleSection
        noteTitle={strings.note_title}
        titlePlaceholder={strings.title_placeholder}
        currentLanguage={strings.current_language}
        onLanguageButtonClick={this.toggleLanguage}
        setTitleField={this.setTitleField}
        content={this.state.titleText}
      />
    </div>
  )

  /**
   * This function returns the JSX for the body section
   */
  getBodySectionJsx = strings => (
    <div className="App-body-container">
      <BodySection
        bodyHeader={strings.body_header}
        bodyNotesPlaceholder={strings.body_notes_placeholder}
        saveButtonText={strings.save_button_text}
        charactersLabelText={strings.characters_label_text}
        setBodyTextHandle={this.setBodyTextHandle}
        onSaveButton={this.addNote}
        content={this.state.bodyText}
      />
    </div>
  )

  /**
   * This function generates the JSX for the saved
   * notes array
   */
  getSavedNotesSectionJsx = () => {
    const notesJsx = this.state.notes.map((note, id) => {
      const noteKey = `note_${id}`;
      return (<SavedNote
        key={noteKey}
        title={note.title}
        body={note.body}
        onClick={() => this.onNoteClick(noteKey)}
      />);
    });
    return (
      <div className="App-notes-container" >
        {notesJsx}
      </div>
    );
  }

  /**
   * Saves the DOM handle of the title field
   */
  setTitleField = (dom) => {
    this.titleFieldHandle = dom;
  }

  /**
   * Saves the DOM handle of the body text area field
   */
  setBodyTextHandle = (dom) => {
    this.bodyTextHandle = dom;
  }

  /**
   * Toggles the language
   */
  toggleLanguage = () => {
    // this.setState(prevState => ({
    //   language: prevState.language === 'english' ? 'thai' : 'english',
    // }));
  }

  /**
   * This function is called when the footer button is clicked
   */
  footerCallback = () => {
    if (this.state.page_key === STRINGS.PAGE_KEYS.SAVED_NOTES_PAGE) {
      this.setState({
        page_key: STRINGS.PAGE_KEYS.HOME_PAGE,
      });
    }
  }

  /**
   * This function adds a note if `this.state.currentKey` is
   * undefined, otherwise it updates that note in the notes array
   */
  addNote = () => {
    // If title or body is empty, dont update or create note
    if (this.titleFieldHandle && this.bodyTextHandle
      && this.titleFieldHandle.value.length && this.bodyTextHandle.value.length) {
      const note = {
        title: this.titleFieldHandle.value,
        body: this.bodyTextHandle.value,
      };

      // Clear the text fields in the UI
      this.titleFieldHandle.value = '';
      this.bodyTextHandle.value = '';

      // If a note is selected, edit it,
      // otherwise create a new note
      if (this.state.currentKey !== undefined) {
        const noteCopy = this.state.notes.slice();
        noteCopy[this.state.currentKey] = note;
        // Update notes, reset fields and currentKey
        this.setState({
          notes: noteCopy,
          currentKey: undefined,
          titleText: '',
          bodyText: '',
        });
      } else {
        this.setState(prevState => ({
          notes: prevState.notes.concat(note),
        }));
      }
    }

    // Show the saved notes page
    this.setState({
      page_key: STRINGS.PAGE_KEYS.SAVED_NOTES_PAGE,
    });
  }

  render() {
    // Choose language
    const strings = STRINGS[this.state.language];

    // Decide current page flag
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
