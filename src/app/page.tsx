// page.tsx

import React from 'react';
import Hero from './components/Hero';
import Brand from './components/Brand';
import Ceramics from './components/Ceramics';
import Studio from './components/Studio';
import Club from './components/Club';
import Products from './components/Products';
import Header from './components/Header';



 export default  function Page() {

  return (
    <div>
      <Header/>
      <Hero />
      <Brand />
      <Ceramics />
      <Products />
      <Club />
      <Studio />
    </div>
  );
}

