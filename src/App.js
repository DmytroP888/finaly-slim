import React from "react"

import GlobalFonts from './assets/fonts/fonts'
import GlobalStylesReset from './assets/reset'
import Router from './Router'

// import Header from "./components/Header";

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStylesReset />

      {/* <Header /> */}

      <Router></Router>
    </div>
  )
}

export default App
