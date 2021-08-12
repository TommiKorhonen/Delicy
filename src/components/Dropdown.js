import React, {useEffect} from 'react'
import { Link } from "react-router-dom";


const Dropdown = ({toggle, isOpen}) => {
    return (
        <div className={isOpen ?"fixed h-full w-full grid grid-rows-1 text-center items-center bg-black z-20" : 'hidden'}  >
            <ul className="text-white">
                <li className="flex flex-col text-4xl gap-10 uppercase" onClick={toggle}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown
