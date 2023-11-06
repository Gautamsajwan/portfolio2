import React from 'react'

type Props = {
    key: string,
    title: string,
    image: string,
    description: string
}

export default function ProjectItem({ key, title, image, description }: Props) {
    return (
        <div key={key} className="w-full snap-center flex flex-shrink-0 flex-col justify-center items-center p-10 md:p-32">
            <div className="relative w-[400px] outline outline-[5px] outline-[#dbfffd]/40 rounded-lg">
                <img src={image} alt="project image" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-14 w-[100%] h-[70%] bg-gradient-to-r from-[#6a11cb] to-[#2575fc] -z-10 blur-[70px]"></div>
            </div>

            <h1 className="text-4xl mt-5 font-bold">{title}</h1>

            <div className="mt-5 p-3 text-gray-900 font-semibold rounded-lg bg-[rgb(238,247,255)]/80">
            <p className="text-lg text-center h-[100px] max-h-[150px] overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-[#242424]">{description}</p>
            </div>
        </div>
    )
}