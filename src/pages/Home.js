import React from 'react'
import Banner from '../components/Banner'
import FashionTrand from '../components/FashionTrand'
import HeroSection from '../components/HeroSection'
import Layouts from '../components/Layouts'
import SpecialProduct from '../components/SpecialProduct'
import TopCollection from '../components/TopCollection'
import TopHeros from '../components/TopHeros'


const Home = () => {

  return (
<<<<<<< HEAD
    <>
      <Layouts showFooter={true} showHeader={true}>

        <TopHeros />
        <HeroSection />
        <TopCollection />
        <FashionTrand />
        <SpecialProduct />
      </Layouts>
    </>
=======
    <div >

      <Banner />
      <TopHeros />
      <HeroSection />
      <TopCollection />
      <FashionTrand />
      <SpecialProduct />
    </div>
>>>>>>> f6af39c0429e7a9114cc462fa8dd769296b845e4
  )
}

export default Home