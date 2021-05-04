import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './AboutMe'

function App() {
  return (
    <Routes>
      <Route path="/">
        <AboutMe />
      </Route>
    </Routes>
  )
}

export default App
