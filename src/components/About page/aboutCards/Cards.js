import React from 'react'
import {test} from "./AboutData"
import imageOne from "../../../images/fun.jpg"
import imageTwo from "../../../images/serve.jpg"
import imageThree from "../../../images/quality.jpg"


const Cards = () => {
    return (
        <div className="py-36 flex justify-center gap-36 flex-wrap">
            <div className="p-4 centerFlex flex-col">
                <h2 className="text-5xl">Creating a totally fun atmosphere</h2>
                <p className="text-gray-400 mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className="flex flex-col justify-end ">
                <img src={imageTwo} alt="" className="max-w-full w-full"/>
            </div>
            <div className="flex flex-col justify-end ">
                <img src={imageOne} alt="" className="max-w-full w-full"/>
            </div>
            <div className="p-4 centerFlex flex-col">
                <h2 className="text-5xl">Creating a totally fun atmosphere</h2>
                <p className="text-gray-400 mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </div>
    )
}

export default Cards
