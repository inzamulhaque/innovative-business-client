import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content px-28 ">
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
            </footer>
        </div>
    )
}

export default Footer