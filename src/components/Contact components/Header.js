import React from 'react'
import Form from './Form'

const Header = () => {
    return (
        <header className="flex flex-col h-screen">
            <div className="centerFlex flex-col mt-32 m-auto gap-8">
                <div className="p-4">
                    <h2 className="text-6xl text-center">Get in touch!</h2>
                    <p className="text-gray-400 text-md">Leave us a message and someone will get back to you shortly</p>
                </div>
                <div className="text-white centerFlex gap-8 text-lg">
                    <div className="centerFlex flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p>Helsinki</p>
                    </div>
                    <div className="centerFlex flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p>+3580000000</p>
                    </div>
                    <div className="centerFlex flex-col ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p>support@lorem.com</p>
                    </div>
                </div>
                <Form />
            </div>
        </header>
    )
}

export default Header
