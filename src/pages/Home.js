import React from 'react'
import FashionTrand from '../components/FashionTrand'
import HeroSection from '../components/HeroSection'
import Layouts from '../components/Layouts'
import SpecialProduct from '../components/SpecialProduct'
import TopCollection from '../components/TopCollection'
import TopHeros from '../components/TopHeros'
import Nav from './Nav'

const Home = () => {
  return (
    <>
      <Layouts showFooter={true} showHeader={true}>

        <TopHeros />
        <HeroSection />
        <TopCollection />
        <FashionTrand />
        <SpecialProduct />
      </Layouts>
    </>
  )
}

export default Home