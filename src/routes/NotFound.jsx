import * as React from 'react';

function NotFound({
  type = '404', title = 'Page Not Found', descrition = 'Ops! You reached out!', actions = [],
}) {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center px-8 space-y-4">
      <h1 className="text-[16rem]">{type}</h1>
      <h5 className="text-3xl">{title}</h5>
      <p className="text-xl">{descrition}</p>
      {actions.map((action) => <a href={action.link}>{action.title}</a>)}
    </section>
  );
}

export default NotFound;
