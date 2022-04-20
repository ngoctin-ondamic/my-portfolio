import Introducion from "./components/introduction.component";
import '../src/styles/app.style.scss'
import React from 'react';
import Personal from "./components/personal.component";
import AboutMe from "./components/about.component";
import Abilities from "./components/abilities.component";
function App() {
  return (
    <div className="app">
      <Introducion/>
      <Personal/>
      <AboutMe/>
      <Abilities/>
    </div>
  );
}

export default App;
