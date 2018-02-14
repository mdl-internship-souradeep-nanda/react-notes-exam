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
          {STRINGS.header}
        </strong>
      </header>
      <div className="title-container">
        <TitleSection />
      </div>
      <div className="body-container">
        <BodySection />
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
