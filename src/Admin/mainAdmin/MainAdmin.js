import React from 'react'
import BarChat from '../Chats/BarChat'
import BuyandSell from '../Chats/BuyandSell'
import EmployeeStatus from './EmployeeStatus'
import LatestOrder from './LatestOrder'
import ProductCart from './ProductCart'
import ShortSummary from './ShortSummary'

const MainAdmin = () => {
    return (
        <div>
           
            <ShortSummary />

            <BarChat />
            <LatestOrder />
            <BuyandSell />
            <ProductCart />
            <EmployeeStatus />

        </div>
    )
}

export default MainAdmin