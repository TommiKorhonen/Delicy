import React from 'react'
import heroImg from "../../images/about.jpg"

const Header = () => {
    return (
        <header className="flex flex-col bg-about-hero-img h-screen bg-cover bg-no-repeat bg-center" >
            <div className="centerFlex flex-col px-4 m-auto ">
                <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl sm:mt-16 shadow-md">This is what you need <br /> to know about Delicy</h1>   
            </div>
        </header>
    )
    
}

export default Header
