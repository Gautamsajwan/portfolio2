"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="py-1 px-3 bg-[rgb(26,26,26)] sticky top-0 flex justify-between items-center font-montserrat max-w-7xl mx-auto z-40">
      <motion.div
      initial= {{
        y: -300,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
      className="absolute -z-10 mr-2 -top-[39px] right-[2px] w-[180px] h-[100px] rounded-[35px] outline-dashed outline-red-400 outline-[3px]"></motion.div>

      <motion.div 
      initial= {{
        x: -300,
        scale: 0.5,
        opacity: 0
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity: 1
      }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
      className="flex justify-center items-center">
        <SocialIcon url='https://www.linkedin.com/in/gautam-sajwan-b44179217/' fgColor='deepskyblue' bgColor='transparent'/>
        <SocialIcon url='https://twitter.com/GautamSajwan6' fgColor='dodgerblue' bgColor='transparent'/>
        <SocialIcon url='https://github.com/Gautamsajwan' fgColor='orange' bgColor='transparent'/>
        <a href="https://leetcode.com/gautamsajwan8126/"><SiLeetcode className="h-6 w-6 mr-5 ml-3 text-orange-400"/></a>
        <a href="https://auth.geeksforgeeks.org/user/gautamsajwan8126"><SiGeeksforgeeks className="h-9 w-9 text-green-500"/></a>
      </motion.div>

      <motion.div 
      initial= {{
        x: 300,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
      className="mr-2 p-2 flex gap-1 text-[rgb(26,26,26)] font-semibold rounded-full items-center bg-white cursor-pointer hover:bg-red-300 hover:scale-125">
        <DocumentTextIcon className="w-7 bg-red-400 rounded-full p-[2px]"/>
        <a href="/assets/Gautam_Sajwan_Resume.pdf" download="Gautam_Sajwan_Resume.pdf">Download CV</a>
      </motion.div>
    </header>
  )
}