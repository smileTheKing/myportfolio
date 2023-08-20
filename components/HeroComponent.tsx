import React from 'react'
import Image from 'next/image'

import ProfileImg from './../public/profile_image.png'
export default function  HeroComponent () {
  return (
    <div className=' flex flex-col md:flex-row items-center  justify-center md:max-h-[500px] py-8  gap-4 md:gap-0 ' >
        <div className="  flex h-full w-full flex-auto row ">
            <Image src={ProfileImg} alt='profile-img' sizes='100vh'  width={1000} height={1000} />
        </div>
        <div className="  flex h-full w-full flex-auto flex-col gap-6 py-4 items-center md:items-start justify-center ">
            <h1 className=' font-serif text-3xl sm:text-4xl font-extrabold text-slate-800'>Solomon Cammue</h1>
            <h2 className=' font-serif text-2xl font-extrabold text-slate-700'>Software Engineer</h2>

            <p className='  font-mono text-base font-bold text-slate-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iure blanditiis earum quo aliquid fugit dicta possimus cupiditate sequi quibusdam saepe? 
              Laboriosam similique consequuntur,
              quam porro laudantium expedita sint aperiam?
            </p>

            <div className=' gap-5 flex sm:mt-24 flex-col md:flex-row w-full '>
                <button className=' shadow-md hover:shadow-lg rounded-md bg-slate-600 p-4 text-white'>Hire Me!!</button>
                <button className='shadow-md hover:shadow-lg   rounded-md bg-slate-500 p-4 text-white'>Contact</button>
            </div>
        </div>
    </div>
  )
}

