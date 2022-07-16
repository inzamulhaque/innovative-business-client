import React from 'react'
import Banner from '../components/Banner'
import FashionTrand from '../components/FashionTrand'
import HeroSection from '../components/HeroSection'
import SpecialProduct from '../components/SpecialProduct'
import TopCollection from '../components/TopCollection'
import TopHeros from '../components/TopHeros'


const Home = () => {

  return (
    <div >

      <Banner />
      <TopHeros />
      <HeroSection />
      <TopCollection />
      <FashionTrand />
      <SpecialProduct />
    </div>
  )
}

export default Home