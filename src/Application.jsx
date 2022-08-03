import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Seo from './components/Seo';
import Home from './routes/Home';

function Application() {
  return (
    <HelmetProvider>
      <Seo title="My Vanilla React App" description="My Vanilla React Application based on react-script & react-router." />
      <Home />
    </HelmetProvider>
  );
}

export default Application;
