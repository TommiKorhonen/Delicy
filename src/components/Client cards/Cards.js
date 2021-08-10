import React from 'react'

const Cards = ({text, paragraph, career}) => {
    return (
        <div className="centerFlex flex-col  
        gap-4 p-24  
        bg-client-card bg-cover bg-full h-full
        rounded-lg w-full mix-blend-hard-light lg:max-w-lg mt-16 md:mt-0" data-aos="fade-up">
            <q className=" text-white text-lg text-center">{paragraph}</q>
            <h2 className="text-4xl text-white ">{text}</h2>
            <span className="text-xl self-bottom text-white uppercase">{career}</span>
        </div>
    )
}

export default Cards
