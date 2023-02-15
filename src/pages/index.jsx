import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HomePage/HeroSection';
import TopicsSection from '../components/HomePage/TopicsSection';
import CommunitySection from '../components/HomePage/CommunitySection';
import HomeFooter from '../components/HomePage/HomeFooter';

export default function Homepage() {
  return (
    <Layout
      description='Explore the Android development resources and notes. Open Source - Run the code'
      wrapperClassName='homepage flex flex-col'
      noFooter
    >
      <HeroSection />
      <TopicsSection />
      <CommunitySection />
      <HomeFooter />
    </Layout>
  );
}
