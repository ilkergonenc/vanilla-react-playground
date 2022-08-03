import * as React from 'react';

import '../assets/Logo.css';
import logo from '../assets/logo.svg';

function Home() {
  return (
    <div className="text-center">
      <header className="bg-slate-800 min-h-[100vh] flex flex-col items-center justify-center text-slate-50">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="text-slate-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
