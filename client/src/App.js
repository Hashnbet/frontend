import React from 'react';
import SignUp from './components/onBoarding/signUp';
import Nav from './components/nav_bar/nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav></Nav>
        <p>
          Hashnbet
        </p>
        <SignUp></SignUp>
      </header>
    </div>
  );
}

export default App;
