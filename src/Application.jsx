import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import Seo from './components/Seo';

function Loading() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <p>Loading...</p>
    </div>
  );
}

const Home = loadable(() => pMinDelay(import('./routes/Home'), 200), {
  fallback: <Loading />,
});

function Application() {
  return (
    <HelmetProvider>
      <Seo title="My Vanilla React App" description="My Vanilla React Application based on react-script & react-router." />
      <Home />
    </HelmetProvider>
  );
}

export default Application;
