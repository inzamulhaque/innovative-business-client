import React from 'react'



const collection = [
    {
        image: 'https://placeimg.com/400/225/arch',
        star: '3',
        name: 'dafasfa',
        price: "300"
    },
    {
        image: 'https://placeimg.com/400/225/arch',
        star: '3',
        name: 'dafasfa',
        price: "300"
    },
    {
        image: 'https://placeimg.com/400/225/arch',
        star: '3',
        name: 'dafasfa',
        price: "300"
    },
    {
        image: 'https://placeimg.com/400/225/arch',
        star: '3',
        name: 'dafasfa',
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
                {
                    collection.map(item =>
                        <div class="grid  flex-grow card bg-base-300 rounded-box ">
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
                        </div>
                    )
                }





            </div>
        </div>
    )
}

export default TopCollection