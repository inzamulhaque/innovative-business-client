import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='bg-[#f8f8f8]'>
                <div className='px-16 py-[40px] flex justify-between w-full'>
                    <p className='uppercase text-[18px] text-[#212529] font-[500] '>login</p>
                    <p className='uppercase text-[18px] text-[#212529] font-[500] '>home / login</p>
                </div>
            </div>
            <div className='px-16 flex flex-col lg:flex-row justify-between '>
                <div className='lg:w-[48%] w-full'>
                    <p className='text-[30px] text-[#222222] font-[700] uppercase text-left my-7'>login</p>
                    <div className='border-[1px] border-[#ddd] p-[30px] mb-10'>
                        <div class="form-control w-full mb-[30px]">
                            <label class="label">
                                <span class="text-[18px] text-left text-[#333] font-[500]">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" class="input input-bordered w-full rounded-none " />
                        </div>
                        <div class="form-control w-full mb-[30px]">
                            <label class="label">
                                <span class="text-[18px] text-left text-[#333] font-[500]">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" class="input input-bordered w-full rounded-none " />
                        </div>
                        <div className='w-full flex justify-start'>
                            <button className='bg-[#ff4c3b] text-white uppercase py-[13px] px-[29px] font-[500] text-[18px]'>login</button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[48%] w-full'>
                    <p className='text-[30px] text-[#222222] font-[700] uppercase text-left my-7'>new customer</p>
                    <div className='border-[1px] border-[#ddd] p-[30px] mb-10'>
                        <p className='text-[20px] text-[#333333] mb-[35px] font-[500] text-left'>CREATE A ACCOUNT</p>
                        <p className='text-[18px] leading-loose text-[#555555] mb-[35px] font-[500] text-left'>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.

                        </p>
                        <div className='w-full flex justify-start'>
                            <button className='bg-[#ff4c3b] text-white uppercase py-[13px] px-[29px] font-[500] text-[18px] mb-10'>create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;