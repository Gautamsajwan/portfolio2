import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean,
  imageUrl?: string,
  proficiency?: string,
  name?: string
}

export default function Skill({ directionLeft, imageUrl, proficiency, name }: Props) {
  return (
    <motion.div 
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
        // scale: 0.5
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        // scale: 1
      }}
      transition={{
        type: 'spring',
        duration: 1.2
      }}
      viewport={{
        once: true
      }}
      className="relative w-24 h-24 xl:w-28 xl:h-28 group cursor-pointer">
      <div className="w-full h-full p-2 relative bg-[rgb(50,50,50)] rounded-lg overflow-hidden group-hover:bg-[rgb(34,34,34)]">
        <div className="w-[25px] h-[7px] absolute bg-gray-400 top-0 left-0"></div>
        <div className="w-[8px] h-[25px] absolute bg-gray-400 left-0 top-0"></div>
        
        <div className="w-[25px] h-[7px] absolute bg-gray-400 top-0 right-0"></div>
        <div className="w-[8px] h-[25px] absolute bg-gray-400 right-0 top-0"></div>

        <div className="w-[25px] h-[7px] absolute bg-gray-400 bottom-0 right-0"></div>
        <div className="w-[8px] h-[25px] absolute bg-gray-400 right-0 bottom-0"></div>

        <div className="w-[25px] h-[7px] absolute bg-gray-400 left-0 bottom-0"></div>
        <div className="w-[8px] h-[25px] absolute bg-gray-400 left-0 bottom-0"></div>

        <img className="w-full h-full object-contain p-2 group-hover:blur-[1.5px] group-hover:brightness-[0.7] transition-all duration-200 ease-in-out" src={imageUrl} alt="skill img" />
      </div>
      
      <div className="w-[98px] h-[98px] rounded-lg absolute flex flex-col justify-center items-center text-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold opacity-0 group-hover:opacity-100 group-hover:backdrop-brightness-50 transition-all duration-200 ease-in-out">
        <h3 className="text-sm text-center font-normal tracking-wider">{name}</h3>
        <p>{proficiency}%</p>
      </div>
    </motion.div>
  )
}