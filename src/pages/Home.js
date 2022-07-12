import React from 'react'
import FashionTrand from '../components/FashionTrand'
import HeroSection from '../components/HeroSection'
import TopCollection from '../components/TopCollection'
import TopHeros from '../components/TopHeros'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <TopHeros/>
      <HeroSection/>
      <TopCollection/>
      <FashionTrand/>
    </div>
  )
}

export default Home