"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ProjectItem from './ProjectItem'
import projectData from './ProjectData'

type Props = {}

export default function Projects({ }: Props) {
  const [projectState, setProjectState] = useState(projectData)
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      type: 'fade',
      duration: 1.5,
    }}
     className="h-screen font-montserrat relative flex flex-col justify-center items-center space-y-20">
      <h1 className="absolute top-16 left-1/2 -translate-x-1/2 text-6xl font-sacramento font-bold text-center text-[#616161]">Projects</h1>

      {/* <div className="w-full border-b-[3px] border-gray-500 border-dashed absolute bg-[rgb(31,31,31)] top-[17%] -z-10"></div>
      <div className="w-full border-b-[3px] border-gray-500 border-dashed absolute bg-[rgb(31,31,31)] bottom-[16%] -z-10"></div> */}

      {/* <div className="h-screen border-r-[3px] border-gray-600 border-dashed absolute bg-[rgb(31,31,31)] left-24 -z-10"></div>
      <div className="h-screen border-r-[3px] border-gray-600 border-dashed absolute bg-[rgb(31,31,31)] right-24 -z-10"></div> */}

      <motion.div
      initial={{
        y: -200,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        type: 'spring',
        delay: 0.2,
        duration: 1.5
      }}
      className="mt-7 w-full h-full flex overflow-x-scroll snap-mandatory snap-x z-20 scrollbar scrollbar-thumb-blue-400 scrollbar-track-[#262626]">
        {projectState.map((details, index) => (
          <ProjectItem key={`${details.title}+${index}`} title={details.title} image={details.image} description={details.description} />
        ))}
      </motion.div>
    </motion.div>
  )
}