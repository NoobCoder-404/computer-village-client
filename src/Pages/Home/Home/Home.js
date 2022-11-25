import React from 'react';
import Banner from '../Banner/Banner';
import CategoryContainer from '../Categories/CategoryContainer/CategoryContainer';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <CategoryContainer />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
