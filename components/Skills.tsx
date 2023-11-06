"use client"
import React, { useState } from 'react'
// import Skill from './Skill'
import {motion} from 'framer-motion'
import skillData from './SkillData.js'

type Props = {}

export default function({ }: Props) {
  // const [skillState, setSkillState] = useState(skillData)
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
      className="h-screen font-montserrat relative flex flex-col justify-center items-center space-y-28">
      <h1 className="absolute top-16 left-1/2 -translate-x-1/2 text-6xl font-sacramento font-bold text-center text-[#616161]">Skills</h1>
      <p className="text-center absolute text-gray-200 top-3 sm:top-7 left-1/2 -translate-x-1/2">Hover over a skill to see proficiency</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-[20px]">
        {/* {
          skillState.map((skill, index) => (
            <Skill key={`${skill.name}+${index}`} directionLeft={skill.directionLeft} imageUrl={skill.imageUrl} proficiency={skill.proficiency} name={skill.name}/>
          ))
        } */}
      </div>
    </motion.div>
  )
}