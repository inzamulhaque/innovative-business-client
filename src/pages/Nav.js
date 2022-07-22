import { faPhone, faHeart, faUser, faBars, faX, faAngleLeft, faToggleOff, faToggleOn, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Nav = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 120) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = window.document.documentElement;
        html.classList.remove("light");
        html.classList.remove("dark");
        html.classList.add(theme);
        localStorage.setItem("theme", theme);

    }, [theme]);

    return (
        <div className=''>
            <div className="py-2 px-3 text-white lg:text-black dark:text-white bg-white dark:bg-black shadow-xl fixed right-0 top-[450px] z-50 inline">
                {theme === "dark" ? <p onClick={() => setTheme("light")} >Light</p> : <p onClick={() => setTheme("dark")} >Dark</p>}
            </div>
            <div className='bg-[#F8F8F8] dark:bg-[#232323]'>
                <div className='px-16 py-[15px] flex lg:justify-between md:justify-end justify-end items-center'>
                    <div className='hidden lg:inline-flex gap-x-7'>
                        <p className='text-[.9rem] text-[#999999] dark:text-[#cfd4da] mb-0'>Welcome to Our store Multikart</p>
                        <p className='text-[.9rem] text-[#999999] dark:text-[#cfd4da] font-sans font-normal'><FontAwesomeIcon icon={faPhone} className='text-[#ff4c3b] text-[.7rem] font-[300]' />{" "}Call Us: 123 - 456 - 7890</p>
                    </div>
                    <div className='inline-flex gap-x-7 items-center'>

                        <div className='group'>

                            <p className='group-hover:text-[#999999] text-[#999999] dark:text-[#cfd4da]'><FontAwesomeIcon icon={faHeart} className='group-hover:text-[#ff4c3b] text-[#999999]'></FontAwesomeIcon> Wishlist</p>
                        </div>
                        <div class="dropdown dropdown-end dropdown-hover group ">
                            <label tabindex="0" class=""><p className='group-hover:text-[#999999] text-[#999999] dark:text-[#cfd4da]'><FontAwesomeIcon icon={faUser} className='group-hover:text-[#ff4c3b] text-[#999999]'></FontAwesomeIcon> My Account</p></label>
                            <ul tabindex="0" class="dropdown-content menu dark:text-[#cfd4da] dark:bg-[#2b2b2b]   bg-base-100 w-52">
                                <div className='dark:text-[#cfd4da] dark:bg-[#232323] bg-[#f8f8f8] h-[15px]'></div>
                                <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] hover:bg-white text-left p-2 shadow ml-3 text-zinc-600'><Link to="/login">Login</Link><br /><Link to="/register">Register</Link><br /><a>Logout</a></p>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className={scrolled ? 'fixed z-50 top-0 left-0 bg-white w-full' : 'bg-white'}>
                {/* <div className='drawer'>
                    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                    <div className='drawer-content flex flex-col'> */}

                <div className='px-14 py-[22px] dark:bg-[#2b2b2b]'>
                    <div class="navbar bg-base-100 dark:bg-[#2b2b2b] ] ">
                        <div class="navbar-start">
                            {/* <label for="my-drawer-3" class="">
                                <FontAwesomeIcon icon={faBars} className='mr-3 text-[24px] font-[900] pr-[40px] text-[#222]' />
                            </label> */}
                            <div onClick={() => props.setOpen(!props.open)} >
                                {props.open ? <FontAwesomeIcon icon={faX} className='mr-3 text-[24px] font-[900] pr-[40px] text-[#222]'></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars} className='mr-3 dark:text-[#cfd4da] text-[24px] font-[900] pr-[40px] text-[#222]'></FontAwesomeIcon>}
                            </div>

                            {props.open && <div className={` z-40 h-[100vh] w-[80%] absolute`}>

                                <div className={`top-32 z-20 left-0 dark:text-[#cfd4da] dark:bg-[#2b2b2b]  bg-white duration-1000 ease-in-out transition w-1/5  h-full ${props.open ? 'left-0 top-[0px] fixed' : 'left-[-50px] '}`}>
                                    <ul class="menu p-0">
                                        <li tabindex="0">
                                            <div className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] hover:bg-white focus:bg-white my-6' onClick={() => props.setOpen(!props.open)} >
                                                {props.open ? <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[24px]  text-left ml-3 text-black font-[600] uppercase'><FontAwesomeIcon icon={faAngleLeft} className='' /> Back</p> : <FontAwesomeIcon icon={faBars} className='mr-3 text-[24px] font-[900] pr-[40px] text-[#222]'></FontAwesomeIcon>}
                                            </div>
                                            <hr className='mb-0 pb-0 hover:bg-white' />
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                clothing
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                bags
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                footwear
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-left ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                watches
                                            </a>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                accessories
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                house of design
                                            </a>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                beauty
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                personal care
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                home and decor
                                            </a>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                kitchen
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>}
                            <a class="ml-0 normal-case text-xl"><img className='w-[179px] h-[34px] ' src="https://multikart-react.vercel.app/assets/images/icon/logo.png" alt="" /></a>
                        </div>
                        <div class="navbar-start hidden md:hidden lg:hidden lg:ml-0 xl:flex">
                            <ul class="menu menu-horizontal p-0">
                                <li tabindex="0">
                                    <a className='text-[20px] dark:text-[#cfd4da] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase'>
                                        Home
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 z-20">
                                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Item 1</a></li>
                                            <li tabindex="0">
                                                <a class="justify-between">
                                                    Parent
                                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                </a>
                                                <ul class="p-2">
                                                    <li><a>Submenu 1</a></li>
                                                    <li><a>Submenu 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Item 3</a></li>
                                        </ul>
                                    </ul>
                                </li>
                                <li tabindex="0">
                                    <a className='text-[20px] dark:text-[#cfd4da] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase'>
                                        Shop
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 z-20">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li tabindex="0">
                                    <a className='text-[20px] dark:text-[#cfd4da] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase'>
                                        Products
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 z-20">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li tabindex="0">
                                    <a className='text-[20px] dark:text-[#cfd4da] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase'>
                                        Features
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 z-20">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li tabindex="0">
                                    <a className='text-[20px] dark:text-[#cfd4da] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase'>
                                        Pages
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 z-20">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li tabindex="0">
                                    <a className='text-[20px] dark:text-[#cfd4da] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase'>
                                        Blogs
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 z-20">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-end">
                            <div className='inline-flex gap-x-7 items-center'>

                                <img className=' dark:invert' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjYyN0M4NTcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjYyN0M4NjcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNjI3QzgzNzJFOTExRThCNzUyQzZBRTY4NDU5RDU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCNjI3Qzg0NzJFOTExRThCNzUyQzZBRTY4NDU5RDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WYb6uAAAAbNJREFUeNqslU0oRFEUx++bptSQxbCwflO+kiJFWEgpFhZTIhvFklJKsvOdBVIiK8ZKFIkFUZqVsLCyIU3WFkhGNOXjf+o/9RrvznvzZk79undm7vzOfad7zzNM01Q2kQ+6QDuoAAa4A2dgD7wlF8ZiMaULw0Y+DuZTvvtlgmRMgUknuS/l8znFD6AXFFMq64J8mlswAS6BX6UJqzwKWvnHUrADni2/v4J9UA3GQAMTOMplcQsfd1o5xwIYBXWhUGguXc3zMH6BR2CqzEJKVAUKUft3u533cD6iMo9hjn26soQ5P/Egj3IM6+Ryjn9AQnmLOCjXyQ2VfRg6+T1Hv0dxAR228kPO2zyImzke6OTbnC97kK9w3NLJP9knyniZ3MYgqAEzdmc8tXFdgXrevCUH8RBYBS8QF7npLU3gGiyCG9DJ1puMAOgAFxTLboO4/mtu5N9sRrOgFhzxDMcp+gDHoJGdswSsS3mQYNNtP5eQR+3mTistL4tTsAueLGtF3A8iKNGAG7nrkJcFd/4vgS8Ht1NRGJEE1hLlRG6TYENlceW1CSCWqYyBnMotCeTkJf4EGAA6kXMrGB0cpgAAAABJRU5ErkJggg==" alt="" />
                                <img className=' dark:invert' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMENEOTc1QjcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMENEOTc1QzcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQ0Q5NzU5NzJFOTExRThCNzBFOERCQzg1RUE3OEU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwQ0Q5NzVBNzJFOTExRThCNzBFOERCQzg1RUE3OEU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7VNBOgAAAv5JREFUeNqclnuITFEcx++sKazHGvEHosws1r/IeoUirRLL0P6BTYvUsnlNm1dGS0hEi1WKSSuPvItlYmVJ2rTyj5U0YrDLem2bRxHr86vf6HTde/dy6tPp/u4553vO+T3uDYTDYctH6wuXoA+0QwDaYFYqlXrd0eQsy1+bD4NgEkzWvhcs8TPZSWQCPILNhk123gjNBo/hV2ZAJBKJQSNM60ikAO7ANVgP1Wp/pycx20BoVYFDdDvgMiR5nusmMh2uwkJYC+KsmXAL9sIJm8hxqGDBWvpFkId/yulnwxlTyBSpgd062dIrCcEztVfYRMS2BdIyDoGUGOku0q0ToT93bUSXLLJaTg8tPgPC0rUtwzc96J5DgncxsQWN9+LofvAEcuGD9Y8Nge46/0ZGwMnxS/X4CYc1RsM5uAkXYKLDmCr4hkCRaZSTdFVnd9FEC+siZiuDSjgJ4uihUAcbNKoy7SFEOVGZhv13OCU+qVexNh2YhJ3GxHFwV5OwzrCPgvsS9uw8aVzZKrpC3XA3uS0RadUoane5armeJljgcj0jEcn38FNafPIWenv4Mwduu7yTk3X2EMime5+lRc8rkr7AGJd3Y+GHR3h/lVsSX7yEe5kSoUm53xgb1ys7CA2GPQ9WSiW27V4idI4+Ss587hQKhU7rkZs0fCWLf6qzLU0s2a2MGwCDoRiOSWSx2ypDoNQoQWktqrGAw/ekQQtigc0+BdZAT9kdHIArZsYjIiE+Atswe56YTXYxHGY4XHGt4tWWw1PEjiC02CnjpbQvU5Fm6z8aC3/U+fMQ2uYksh32wQvbXLGVuqxbwmKVNqEW9etGJ5GonqZQnyVB30C+Vuhym8AK2CPJiNAn6K9+mar2YieR83JMrVtxjap6zQWpqCU2Efm+b2Xn4yUA5BAIbKK/LmOxV7tV4bP6hZSCedjIgRzNJ7O9gmy9Iik5u/QLGeU54RVdln7fc222oFbekPFLNAQeGL6I6w381YI+A0fiv0gzPyMiJeOon8m/BRgAuQrmGVlzgYMAAAAASUVORK5CYII=" alt="" />
                                <div className='indicator'>
                                    <span class="indicator-item badge badge-sm bg-[#ff4c3b] border-0 mt-[-5px] py-[7px] px-[5px] text-white ">0</span>
                                    <img className=' dark:invert' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE0NDdGMjcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE0NDdGMzcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MTQ0N0YwNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MTQ0N0YxNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hNS3IQAAAf9JREFUeNqklU1IFVEUx+fZKwldmEGJHyjvWbpxUUi0aaEouAzMQIUnSpC6UHfiVxuN2hluXKkbN4roJgRBUtyECIpYEcJDhBYRqahoIT6n34EzcJne14wHfm/ePcz8597/vedMIBQKWUkiG0agAfIgADb8ggUYiEajR4kezkgi/BxOoR0+QjPUQiPMQwschsPhpkQCgQQzb4VJGIPuJBN4D73QyQrG0xGXRBTewLCVOnpgFCp4wZdUtizCfprCFoIfuHyHpVSe34cyiFje4iXk438omfgz+AtrXpSZ/Y5ufnU8z8WzOijX/Dbc8qB/KZ7rf7FoBbqC/HyCKpiAOfit1ngNOV13xB7ogMdBFZ6BVz4ExZL/cngf4/JaxKf0XP+BIsjyIo6QOZT92lO9WRFvg114B+vww/If91R4hBUNmUUkby1Uz33ZwirkEJxITyJ/6RzFIm1KD6zrRZnqlKZqXPWwYYzlFGzCQyP3mdlG/HTFAqh0td9HkGPknkKxH/EzrTqzUM7hwsgduO5JW9xS/7yM0xbPUSucuAm3IdPI5cLdRAJB42prITkhbaHfGP+EQS0SJ/pg1VVEtqMbNPzNdK1kS3HiGN66v0Su8r9SnTP3l+irnpAXukl2HF/tOGPnHmkb07LhvLDEnLnEE1jWj3HMRwHdgG9Q4yT+CTAApdl93m9bmRMAAAAASUVORK5CYII=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;