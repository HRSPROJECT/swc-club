import React from 'react';
import HeroCarousel from '../components/Home/HeroCarousel';
import WhatWeRepresent from '../components/Home/WhatWeRepresent';
import WhatWeDo from '../components/Home/WhatWeDo';
import CollaborationsMarquee from '../components/Home/CollaborationsMarquee';
import Testimonials from '../components/Home/Testimonials';
import CallToAction from '../components/Home/CallToAction';
import FAQ from '../components/Home/FAQ';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <WhatWeRepresent />
      <WhatWeDo />
      <CollaborationsMarquee />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </>
  );
};

export default Home;
