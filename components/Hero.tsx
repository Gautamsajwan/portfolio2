"use client"
import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
  const [text] = useTypewriter({
    words: ["Hey, My name is Gautam", "Guy, who Loves to Code </>", "For Solving Problems"],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="relative pt-16 font-montserrat font-bold h-screen flex flex-col items-center justify-center space-y-[2.5rem] overflow-hidden">
      <BackgroundCircle />
      <div className="relative w-32 h-32 outline outline-[7px] outline-white/70 rounded-full ">
        <Image
          src="/assets/Profile picture.png"
          priority={true}
          fill
          alt="Picture of the author"
          className="rounded-full"
        />
        <div className="absolute top-0 left-0 rounded-full w-full h-full bg-[#08AEEA] bg-gradient-to-r from-[#1cb8f1] to-[#4f2af5] -z-10 blur-[30px]"></div>
      </div>
      <div className="z-20">
        <h1 className="pb-4 text-center uppercase tracking-[15px] text-[#616161]">Tech Enthusiast</h1>
        <h1 className="text-center tracking-wide text-5xl">
          <span>{text}</span>
          <Cursor cursorColor='gray' />
        </h1>
      </div>

      <div className="z-20 md:space-x-10 text-sm flex flex-wrap justify-center items-center gap-5">
        <Link href="#about">
          <button className="navButtons">About</button>
        </Link>
        <Link href="#experience">
          <button className="navButtons">Achievements</button>
        </Link>
        <Link href="#skills">
          <button className="navButtons">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="navButtons">Projects</button>
        </Link>
      </div>
    </div>
  )
}