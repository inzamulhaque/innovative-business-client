import React from 'react'

const HeroSection = () => {
    return (
        <div className='px-14'>
            <div class="flex w-full gap-9">
                <div class="grid  flex-grow card bg-base-300 rounded-box place-items-center">
                    <img src="https://multikart-react.vercel.app/_next/static/images/sub-banner1-d89099e9c448c84a71f131fd01d931ec.jpg" height="100%" width="100%" alt="" />
                </div>
           
                <div class="grid  flex-grow card bg-base-300 rounded-box place-items-center">
                    <img src="https://multikart-react.vercel.app/_next/static/images/sub-banner2-8eaf597c5af59e6bda754e95b855d860.jpg"  height="100%" width="100%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection