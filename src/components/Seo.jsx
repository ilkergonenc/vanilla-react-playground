import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import useStaticData from '../hooks/useStaticData';

function Seo({ title, description = '', children }) {
  const metaTitle = useStaticData('meta.title');

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </Helmet>
  );
}

export default Seo;
