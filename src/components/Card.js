import React from 'react'
import Cards from './Cards'




const Card = () => {
    return (
        <div className= "flex justify-center gap-8 flex-wrap pt-32">
           { Cards.map( (card, index) => {
               return (
                   <div className="w-54 centerFlex  max-w-lg px-8" key={index} data-aos="fade-up">
                        <div className="h-full bg-gray-700"> 
                            <img src={card.src} alt="" className="h-full mix-blend-multiply max-w-sm w-full"/>
                        </div>
                        <div className="absolute px-4 align-middle">
                            <h2 className="text-yellow-400 sm:text-6xl lg:text-4xl text-5xl text-center">{card.text}</h2>
                            <p className="text-gray-100 px-4 text-center lg:px-32">{card.paragraph}</p>
                        </div>  
                   </div>

                
               )
           })}
            
        </div>
    )
}

export default Card
