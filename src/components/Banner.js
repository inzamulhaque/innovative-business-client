import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full z-10 mb-12">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://multikart-react.vercel.app/assets/images/home-banner/1.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle glass text-[#000]">❮</a>
                        <a href="#slide2" class="btn btn-circle glass text-[#000]">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://multikart-react.vercel.app/assets/images/home-banner/2.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle glass text-[#000]">❮</a>
                        <a href="#slide1" class="btn btn-circle glass text-[#000]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;