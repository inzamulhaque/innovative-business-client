import React from 'react'
import Banner from '../components/Banner'
import Clients from '../components/Clients'
import FashionTrand from '../components/FashionTrand'
import HeroSection from '../components/HeroSection'
import OnlineService from '../components/OnlineService'
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
      <OnlineService />
      <Clients />
    </div>
  )
}

export default Home