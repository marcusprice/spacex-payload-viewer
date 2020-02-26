import React from 'react';
import ContentCard from './ContentCard';

const Content = () => {
  return(
    <section>
      <ContentCard type="payload" />
      <ContentCard type="rocket" />
      <ContentCard type="payload" />
      <ContentCard type="payload" />
    </section>
  )
}

export default Content;
