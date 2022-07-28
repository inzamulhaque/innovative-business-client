const Vendor = () => {
  return (
    <div class="overflow-x-auto mx-8">
                <h1 className="text-3xl text-left p-10">Vandor list</h1>
                <table class="table w-full border-2 border-gray-200">
                    <thead>
                        <tr className='grid grid-cols-8 justify-items-center border-[1px] border-gray-300'>


                          
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>Id</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>vendor</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'><span>Products</span></th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'> store name</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate' >created</th>
           
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>Balance</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>Revinue</th>
                            <th className='w-full bg-slate-200 text-center border-8 border-stone-50 truncate'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='grid grid-cols-8  border-y-[1px] border-gray-300 '>
                            <td className='w-full h-14  py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Order Id</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Image</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Status</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'><span>Payment</span></td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate'>Order status</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate' >date</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate' >date</td>
                            <td className='w-full h-14 py-2 bg-slate-100 text-center border-8 border-stone-50 truncate' >date</td>
                           
                        </tr>

                    </tbody>

                </table>
            </div>
  )
}

export default Vendor