import React from "react"
import logo from "../assets/RoboFest2.svg"

function Navbar() {

    return (
        <div className="container sticky z-[100]  flex items-center justify-between py-5 text-sm md:text-xl px-2 md:px-12">
            <a href="/" className="">
                <img alt="xield logo" className="remove-custom-cursor w-[130px] rounded-full object-contain" src={logo} />
            </a>
            <button className="purp-btn">
                <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                Join us
            </button>
        </div>
    )
}
export default Navbar
