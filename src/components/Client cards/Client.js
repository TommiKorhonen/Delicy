import React from 'react'
import Cards from './Cards'
import {data} from './Clientdata'

const Client = () => {
    return (
        <section className="relative">
            <div className="absolute bg-white shadow-lg 
            w-32  left-1/2 transform -translate-x-16 -top-6 text-center rounded-md">
                <h3 className="text-xl uppercase">Our</h3>
                <h2 className="text-black text-4xl">Clients</h2>
            </div>
            <div className="centerFlex flex-wrap gap-4 p-4 md:p-28 bg-gradient-to-br from-gray-900 to-gray-700">
            {data.map((client) => {
                return (
                    <Cards key={client.id} {... client}></Cards>
                )
            })}
            </div>
        </section>
    )
}

export default Client
