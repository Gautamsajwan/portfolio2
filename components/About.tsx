"use client"
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
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
      className="relative z-20 mx-auto max-w-7xl px-10 h-screen font-montserrat flex flex-col lg:flex-row gap-x-[70px] justify-evenly items-center">
      <h1 className="absolute top-16 left-1/2 -translate-x-1/2 text-6xl font-sacramento font-bold text-center text-[#616161]">About</h1>

      <div className="relative -mb-28 lg:mb-0 w-64 h-64 flex-shrink-0 lg:w-[400px] lg:h-[400px]">
        <motion.img
          initial={{
            opacity: 0,
            x: -200
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: 'spring',
            duration: 1.5,
          }}
          className="w-full h-full rounded-full outline outline-[6px] xl:outline-[8px] object-contain" src="/assets/ProfileLG.png" alt="profile image" />

          <div className="absolute top-2 rounded-full w-full h-full bg-gradient-to-r from-[#77f3b5]/80 from-[30%] to-[#41d1ff]/80 -z-10 blur-[40px]"></div>
          {/* <div className="absolute top-0 w-full h-[65%] bg-[rgb(26,26,26)] -z-10"></div> */}
          {/* <div className="absolute top-0 w-full h-full rounded-full border-[10px] -z-20"></div> */}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          x: 100
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true,
        }}
        transition={{
          type: 'spring',
          duration: 1.5,
        }}
        className="-mb-20 lg:mb-0 space-y-3">
        <h2 className="text-center text-3xl font-bold lg:text-left">Here is a little about <span className="bg-white px-2 text-[#1f1f1f]">Me</span></h2>
        <div className="px-3 py-2 bg-[#eff2f5] rounded-lg">
          <p className="text-lg tracking-normal text-gray-800 font-bold max-h-[150px] lg:max-h-fit overflow-y-scroll lg:overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-[#8a8a8a]">
            Hi, I&apos;m Gautam Sajwan, a 3rd-year B.Tech student at Graphic Era Hill University. I love working with technology and coding.<br/> I&apos;m really good at C++, Javascript, C, and Java, and I&apos;m comfortable with Python and SQL too.

            I&apos;m also pretty good at Full Stack Web Development and used to technologies related to frontend and backend like Routing, StateManagement, REST apis, RealTime communication etc. <br/> I&apos;m also confident in Data Structures and Algorithms, which help me solve problems efficiently.

            I&apos;m always eager to learn and improve. I&apos;m excited about taking on new projects and challenges. Let&apos;s work together and create something great!
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}