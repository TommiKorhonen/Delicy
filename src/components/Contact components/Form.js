import React from 'react'

const Form = () => {
    return (
        <div className="p-8 rounded-md bg-gray-700 centerFlex flex-col w-full">
            <form action="" className="p-8 flex flex-col gap-4 w-full ">
                <input type="text" placeholder="Your name" className="rounded-md outline-none p-2 w-full max-w-2xl"/>
                <input type="text" placeholder="Email address" className="rounded-md outline-none p-2 w-full max-w-2xl"/>
                <textarea name="" id="" cols="30" rows="10" className="rounded-md resize-none outline-none w-full max-w-2xl" placeholder="Message"></textarea>
                <button className="btn">Send Message</button>
            </form>
        </div>
    )
}

export default Form
