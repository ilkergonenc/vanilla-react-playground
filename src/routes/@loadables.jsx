import * as React from 'react';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

function Loading() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <p>Loading...</p>
    </div>
  );
}

const Home = loadable(() => pMinDelay(import('./Home'), 200), {
  fallback: <Loading />,
});

const NotFound = loadable(() => pMinDelay(import('./NotFound'), 200), {
  fallback: <Loading />,
});

export {
  Home,
  NotFound,
};
