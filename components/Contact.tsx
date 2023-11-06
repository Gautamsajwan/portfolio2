"use client"
import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

// type Inputs = {
//     name: string
//     email: string
//     subject: string
//     body: string
// }

export default function Contact({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            body: ""
        }
    })

    return (
        <div className="mx-auto p-2 max-w-7xl h-screen relative font-montserrat flex flex-col justify-center gap-5">
            <h1 className="absolute top-16 left-1/2 -translate-x-1/2 text-6xl font-sacramento font-bold text-center text-[#616161]">Contact</h1>

            <div className="mt-24 w-full flex flex-col justify-center items-center">
                <h1 className="text-center text-2xl font-bold">I have just got the right skills you need <br/> Let&apos;s Talk !!!</h1>

                <div className="mt-2 p-3 text-base flex flex-col outline-[2px] outline-dashed outline-blue-400 items-start rounded-lg space-y-4 font-bold tracking-wider">
                    <div className="flex justify-center items-center">
                        <PhoneIcon className="w-7 h-7 mr-2 text-yellow-400" />
                        +91-8126194949
                    </div>
                    <div className="flex justify-center items-center">
                        <EnvelopeIcon className="w-7 h-7 mr-2 text-purple-400" />
                        <a href="mailto: gautamsajwan8126@gmail.com">gautamsajwan8126@gmail.com</a>
                    </div >
                    <div className="flex justify-center items-center">
                        <MapPinIcon className="w-7 h-7 mr-2 text-blue-500" />
                        <a href="https://www.google.com/maps/place/Clement+Town,+Dehradun,+Uttarakhand+248002/" target='_blank' >Clement town, Dehradun</a>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit((data) => {
                window.location.href = `mailto:gautamsajwan8126@gmail.com?subject=${data.subject}&body=hi, my name is ${data.name} and ${data.body}.We can connect at ${data.email}`
            })} className="flex flex-col justify-center mx-auto space-y-2">
                <div className="flex space-x-2">
                    <div>
                        <input {...register("name", { required: "please enter your name" })} placeholder="Name" type="text" className="contactInput" />
                        <p className="text-red-500 tracking-wide text-sm">{errors.name?.message}</p>
                    </div>
                    <div>
                        <input {...register("email", { required: "please fill out your email" })} placeholder="Email" type="email" className="contactInput" />
                        <p className="text-red-500 tracking-wide text-sm">{errors.email?.message}</p>
                    </div>
                </div>

                <input {...register("subject")} placeholder="Subject" type="text" className="contactInput" />

                <textarea {...register("body", {
                    required: "please write a message",
                    minLength: {
                        value: 10, message: "please enter the message of greater than 10 characters"
                    }
                })} placeholder="Message" className="contactInput w-full scrollbar scrollbar-thumb-blue-400 scrollbar-track-[#262626]" rows={2} ></textarea>
                <p className="text-red-500 tracking-wide text-sm">{errors.body?.message}</p>

                <button type="submit" className="py-2 px-10 rounded-md font-bold bg-blue-400 text-xl transition-all duration-200 hover:bg-blue-500 active:scale-95">Submit</button>
            </form>
        </div>
    )
}