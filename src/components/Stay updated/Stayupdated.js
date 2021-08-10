import React from 'react'
import { Link } from 'react-router-dom'

const Stayupdated = () => {
    return (
        <aside className="h-full bg-yellow-400 grid shadow-lg p-20">
            <div className="centerFlex flex-col gap-4">
                <h2 className="text-5xl text-center">Stay updated</h2>
                <input placeholder="Email here" type="email" className="outline-none shadow-lg border-4 border-gray-400 w-full max-w-sm p-1 text-xl"/>
                <Link type="submit" to="/" className="text-black  uppercase border-4 border-gray-400 bg-white p-4 text-lg max-w-sm w-full text-center">Submit</Link>
            </div>    
        </aside>
    )
}

export default Stayupdated
