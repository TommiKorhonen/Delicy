import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import imageOne from '../images/section1.jpg'
import Menu from './Menu/menu.js'
import Whyussec from './Whyussec'
import foodimg from '../images/food.png'
import Aos from 'aos';
import "aos/dist/aos.css"
import Client from './Client cards/Client';


const Content = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <main className="flex-col bg-black">
            <section className="bg-black h-full 
            grid lg:grid-rows-1 lg:grid-cols-2 justify-center 
            grid-rows-1 grid-flow-col-1" data-aos="fade-up">
                <div className="flex justify-center flex-col justify-self-center 
                px-4 py-20 lg:ml-52">
                    <h3 className="text-xl mb-5">About</h3>
                    <h2 className="text-5xl mb-5">the best quality restaurant</h2>
                    <p className="text-gray-300 leading-7">Restaurant in Helsinki sourcing our ingredients locally , 
                        to celebrate life's special moments by offering the best food, 
                        servie and ambiance in every home.</p>
                    <Link to="/about" className="btn self-center my-4 md:self-start">Learn More</Link>
                </div>
                <div className="centerFlex  flex-col lg:py-40 px-10 sm:px-32 md:px-40">
                    <img src={imageOne} alt="" className="lg:w-96 sm:w-72 rounded-xl"/>
                </div>
            </section>
            <Whyussec data-aos="fade-up"/>
            <div className="grid lg:grid-cols-3 grid-rows-1 mb-32">
                <Menu />
                <div className="centerFlex flex-col" data-aos="fade-up">
                    <h2 className="text-6xl mb-4">Menu</h2>
                    <img src={foodimg} alt="" className="w-96 self-center rounded-full border-2 border-yellow-400" />
                    <Link className="btn mt-12" to="/">See Menu</Link>
                </div>
                <Menu />
            </div>
            <Client />
        </main>
    )
}

export default Content
