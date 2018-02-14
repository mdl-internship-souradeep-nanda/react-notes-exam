import React from 'react';
import './App.css';

import TitleSection from '../TitleSection/TitleSection';
import BodySection from '../BodySection/BodySection';

import STRINGS from '../strings.json';

function App() {
  return (
    <div className="App">
      <header>{STRINGS.header}</header>
      <TitleSection />
      <BodySection />
      <footer>{STRINGS.about_us}</footer>
    </div>
  );
}

export default App;
