import * as React from 'react';
import { Link } from 'react-router-dom';

import useStaticData from '../../hooks/useStaticData';

function Header() {
  const appName = useStaticData('name');
  const mainNav = useStaticData('navs.main');

  return (
    <header className="text-gray-600 bg-slate-200 border-b drop-shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h5 className="text-lg font-semibold">{appName}</h5>
          <nav className="space-x-4">
            {mainNav.map((navItem) => (
              <Link key={navItem.link} to={navItem.link}>
                {navItem.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
