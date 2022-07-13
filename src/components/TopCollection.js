import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from 'swiper'

import StarRatings from "react-star-ratings";


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


const TopCollection = () => {


    return (
        <div>
            <div className='mx-auto w-1/2 py-10 '>

                <p className='text-red-500 text-xl pb-4'>Special Offer</p>
                <h1 className=' text-5xl font-bold py-4'>TOP COLLECTION</h1>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui nemo itaque repellendus vel pariatur totam aspernatur. Numquam aut qui quam dolorum dicta asperiores in iste? Sapiente debitis natus ipsa.</p>
            </div>

            <div class="flex w-full  px-14">
                <Swiper

                    spaceBetween={30}
                    breakpoints={{
                        920: {
                            slidesPerView: 4
                        },

                        720: {
                            slidesPerView: 3
                        },

                        450: {
                            slidesPerView: 2
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        collection.map(p =>
                            <SwiperSlide className=''>
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
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>





            </div>
        </div>
    )
}

export default TopCollection


{/* <div class="grid  flex-grow card bg-base-300 rounded-box ">
<div class="card  bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" width='100%' alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
        </div>
    </div>
</div>
</div> */}