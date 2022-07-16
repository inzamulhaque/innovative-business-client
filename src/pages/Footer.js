import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="p-10 bg-base-200  px-28 ">

                <div className='flex-col flex lg:flex-row justify-between items-center my-10'>
                    <div>
                        <p className='text-[24px] text-[#222222] uppercase font-[600] text-left '>KNOW IT ALL FIRST!</p>
                        <p className='text-[18px] text-[#777777]  font-[400] text-left '>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div>
                        <input type="email" placeholder='Enter your email' className='w-[215px] h-[52px] text-[18px] pl-[12px] text-black mr-5' />
                        <button className='bg-[#ff4c3b] text-white uppercase py-[13px] px-[29px] text-center font-[500] text-[18px]'>subscribe</button>
                    </div>
                </div>
                <div class="divider mb-[70px]"></div>
                <div className='text-base-content footer '>
                    <div className=''>

                        <p className='w-80 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor incidunt minus bus explicabo consequuntur praesentium, quod blanditiis deserunt nesciunt? Reprehenderit!</p>
                    </div>
                    <div>
                        <span class="footer-title">MY ACCOUNT</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">WHY WE CHOOSE</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">STORE INFORMATION</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer