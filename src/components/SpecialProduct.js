import React from 'react'
import StarRatings from "react-star-ratings";
const SpecialProduct = () => {

    const collection = [
        {
            image: 'https://placeimg.com/400/225/arch',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            image: 'https://placeimg.com/400/225/arch',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            image: 'https://placeimg.com/400/225/arch',
            rating: 1,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            image: 'https://placeimg.com/400/225/arch',
            rating: 4,
            Mname: 'dafasfssssa',
            price: "200"
        },
        {
            image: 'https://placeimg.com/400/225/arch',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },

    ]

    return (
        <div>
            <h1 className='text-5xl font-bold text-red-500 py-8'>SPECIAL PRODUCTS</h1>
            <div className='grid grid-cols-4 gap-7 w-full  px-14'>
                {
                    collection.map(p =>




                        <div class="card  bg-base-100 shadow-xl responsive_swiper">
                            <figure><img src={p.image} width='100%' alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    {p.Mname}
                                    <div class="badge badge-secondary">NEW</div>
                                </h2>
                                <p>price ${p.price}</p>


                                <StarRatings
                                    rating={p.rating}
                                    starRatedColor="red"
                                    starDimension='30px'
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                        </div>)}
            </div>
        </div>
    )
}

export default SpecialProduct