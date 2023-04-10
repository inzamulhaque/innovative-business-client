
const Categories = () => {
    return (
        <div>
            <div class="overflow-x-auto mx-8">
                <h1 className="text-3xl text-left p-10">Categories</h1>
                <table class="table w-full border-2 border-gray-200">
                    <thead>
                        <tr className='grid grid-cols-6 justify-items-center border-[1px] border-gray-300'>


                          
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>Image</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>product-name</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'><span>price</span></th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'> status</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate' >Categories</th>
           
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='grid grid-cols-6  border-y-[1px] border-gray-300 '>
                            <td className='w-full h-14  py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Order Id</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Image</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Status</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'><span>Payment</span></td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Order status</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate' >date</td>
                           
                        </tr>

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Categories