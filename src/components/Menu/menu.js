import React from 'react'
import menudata from './menudata'

const Menu = () => {
    return (
        <div className="centerFlex flex-col p-8 py-32 mb-4 gap-6 "data-aos="fade-right" >
            {menudata.map((menu, index) => {
                return (
                    <div key={index}>
                        <h3>{menu.text}</h3>
                        <p className="text-white">{menu.paragraph}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu
