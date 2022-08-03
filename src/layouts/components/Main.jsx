import * as React from 'react';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}

export default Main;
