"use client"

import Image from "next/image";
import { useState } from "react";

export default function SectionOne() {

    const sendEmail = () => {
        window.location.href = "mailto:contact@hardlyalone.com";
    }

    return(
        <div className="bg-slate-300 flex space-y-2 sm:space-y-0 sm:space-x-3 flex-col sm:flex-row justify-center px-2 py-5">
            <div className="sm:max-w-[400px] lg:max-w-[600px]">
                <Image alt="group of people" src="/sectionOneImage.jpg" height={400} width={700} />
            </div>
            <div>
            <div className="bg-white px-1 py-2 sm:max-w-[300px]">
                <div className="">
                    <Image className="max-h-[75px] object-center object-cover" src="/people.jpg" height={250} width={400} alt="group of people" />
                </div>
                <div className="py-2 flex flex-col items-center space-y-2 text-center">
                    <p>We need your help! if you are willing to be interviewed about loneliness. Click below and simply message, Hola! and I will follow up</p>
                    
                    <div className="flex items-center">
                    {/* <input className="outline-none border-solid border px-2 py-[7px] rounded-l-full border-gray-600" placeholder="email" /> */}
                    <div onClick={sendEmail} className="bg-blue-400 hover:scale-105 hover:text-blue-400 hover:bg-white hover:border hover:border-blue-400 cursor-pointer rounded-md w-fit px-3 py-[8px] text-white">
                        contact
                    </div>
                    </div>
                    
                </div>
            </div>
            </div>
            
        </div>
    )
}