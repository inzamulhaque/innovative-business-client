import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import CreateTodo from '../components/CreateTodo'
import FashionTrand from '../components/FashionTrand'
import HeroSection from '../components/HeroSection'
import Layouts from '../components/Layouts'
import ShowTodo from '../components/ShowTodo'
import SpecialProduct from '../components/SpecialProduct'
import TestCompo from '../components/TestCompo'
import TopCollection from '../components/TopCollection'
import TopHeros from '../components/TopHeros'


const Home = () => {

  return (
    <>
      <Layouts showFooter={true} showHeader={true}>

        <TopHeros />
        <HeroSection />
        <TopCollection />
        <FashionTrand />
        <SpecialProduct />
        {/* <TestCompo/> */}
        <CreateTodo/>
        <ShowTodo/>
      </Layouts>
    </>
  )
}

export default Home