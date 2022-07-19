import React, { useState, useEffect } from "react";
import "./demo.css"

const Demopage = () => {
    //   const [show, setShow] = useState(true);

    const [scrolled, setScrolled] = useState(false);
    // const [css, setCss] = useState({

    // })

    //   const clickHandler = () => {
    //     setShow(!show);

    //   };

    //////////////////
    const handleScroll = () => {
        const offset = window.scrollY;
        console.log(offset);
        if (offset > 120) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // window.onResize =
    });

    // let navbarClasses = ["nav_bar"];
    // if (scrolled) {
    //     navbarClasses.push("scrolled");
    // }

    // resize

    return (
        // <div className={navbarClasses.join(" ")}>
        <div className={scrolled? 'nav_bar scrolled ': 'nav_bar'}>
            <div className="nav_part1">
                <a to="/">
                    <p>ladk</p>
                </a>
            </div>
            {/* <div className={show ? "nav_part2 close" : "nav_part2"}> */}
            <div className="">
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>


            </div>

        </div>
    );
};

export default Demopage;
