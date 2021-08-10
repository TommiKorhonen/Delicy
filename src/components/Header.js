import React from 'react'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header className="flex flex-col bg-transparent bg-hero-img h-screen bg-cover bg-no-repeat bg-center" >

            <div className="centerFlex flex-col px-4 m-auto">
                <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl sm:mt-16">Premium food at affordable price</h1>
                <p className="text-center text-white text-base md:text-lg lg:text-xl">Delicy is restaurant and bar in the hearth of Helsinki</p>
                <Link className="btn mt-4" to="/">Order Online</Link>
            </div>
        </header>
    )
}

export default Header
