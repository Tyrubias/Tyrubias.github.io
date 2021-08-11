import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Experience from './Experience';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/'>
        <AboutMe />
      </Route>
      <Route path='/experience'>
        <Experience />
      </Route>
    </Routes>
  );
}

export default App;
