import * as React from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  Main,
  Footer,
} from './components';

function BaseLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default BaseLayout;
