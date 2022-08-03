import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Seo from './components/Seo';
import BaseLayout from './layouts/BaseLayout';
import {
  Home,
  NotFound,
} from './routes/@loadables';

function Application() {
  return (
    <HelmetProvider>
      <Seo
        title="My Vanilla React App"
        description="My Vanilla React Application based on react-script & react-router."
      />
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Application;
