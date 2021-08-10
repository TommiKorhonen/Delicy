import React from 'react'

const Navbar = ({toggle}) => {
    return (
        <nav className="fixed w-full z-50 bg-transparent flex flex-col items-end sm:p-4">
            <div className="mt-4 sm:mx-12 cursor-pointer" onClick={toggle}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 text-white " 
                fill="white" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                    />
                </svg>
            </div>
        </nav>
    )
};


export default Navbar
