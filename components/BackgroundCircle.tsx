import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircle({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                // borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5
            }}
            className="relative mt-32 flex justify-center items-center origin-center">
            <div className="mt-52 absolute outline-dashed outline-[#333333] h-[200px] w-[200px] rounded-full animate-ping" />
            <div className="mt-52 absolute outline outline-[#333333] h-[600px] w-[600px] rounded-full animate-pulse" />
        </motion.div>
    )
}
// animation 2 ;-
{/* <div className="relative flex justify-center items-center">
        <motion.div
        initial={{
            rotate: 0,
        }}
        animate = {{
            rotate: 360
        }}
        transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        className="absolute outline outline-[#333333] h-[300px] w-[300px] rounded-sm mt-40"/>
        <motion.div
        initial={{
            rotate: 360
        }}
        animate = {{
            rotate: 0
        }}
        transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        className="absolute outline outline-[#333333] h-[500px] w-[500px] rounded-sm mt-40"/> */}