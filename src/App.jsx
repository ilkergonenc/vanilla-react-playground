import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import logo from './logo.svg';
import Seo from './Seo';

function App() {
  return (
    <HelmetProvider>
      <Seo title="My Vanilla React App" description="My Vanilla React Application based on react-script & react-router." />
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
    </HelmetProvider>
  );
}

export default App;
