import * as React from 'react';
import { Link } from 'react-router-dom';

import useStaticData from '../../hooks/useStaticData';

function Footer() {
  const appName = useStaticData('name');
  const appTitle = useStaticData('meta.title');
  const mainNav = useStaticData('navs.main');

  return (
    <footer className="text-gray-600 border-t">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center space-y-4 py-4">
          <nav className="space-x-4">
            {mainNav.map((navItem) => (
              <Link key={navItem.link} to={navItem.link}>
                {navItem.title}
              </Link>
            ))}
          </nav>
          <p className="text-sm">{`${appName} · ${appTitle}`}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
