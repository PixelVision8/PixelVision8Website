import React from 'react'
import Layout from '../components/layout'
import HeroHome from '../components/hero-home';
import Stats from '../components/stats';
import Process from '../components/process';
import Tabs from '../components/tabs';
import Features from '../components/features';
import Timeline from '../components/timeline';
import Cta from '../components/cta';
import Message from '../components/message';

const IndexPage = () => (
  <Layout>
    
    {/*  Page sections */}
    {/* <Message /> */}
    <HeroHome />
    <Stats />
    <Process />
    <Tabs />
    <Features />
    <Timeline />
    <Cta />

  </Layout>
)

export default IndexPage
 