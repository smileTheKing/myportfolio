
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center w-full  ">
    
      <div className=' w-full h-full flex flex-1 items-center justify-center flex-col mt-24 md:mt-24 md:mb-8 md:py-4'>
      <h1 className=' font-bold text-4xl p-4'> Projects</h1>

      <div className='container h-full   sm:flex-row gap-4 py-24 mt-4  bg-slate-200 flex-1  grid  md:grid-flow-row md:grid-rows-3 md:grid-cols-3  grid-flow-row  grid-rows-1 grid-cols-1 md:rounded-lg' style={{ minHeight:'100%'}}>
        <Link href={'/movie'}>
        <div className=' max-w-[400px] h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 relative overflow-hidden' style={{ maxHeight:300}}>
          <Image src={require('../../public/diehard.png')} width={2000} height={200} alt={'f'} className=' absolute overflow-hidden'/>
          <h2 className=' text-white shadow-xl relative z-20'>
          Movie App
          </h2>
           
        </div>
        </Link>


        <Link href={'/movie'}>
        <div className='  max-w-[400px] h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 relative overflow-hidden' style={{ maxHeight:300}}>
          <Image src={require('../../public/shopping.jpeg')} width={400} height={200} alt={'f'} className=' absolute overflow-hidden'/>
          <h2 className=' text-white shadow-xl relative z-20'>
          Shopping App
          </h2>
           
        </div>
        </Link>



        <Link href={'/movie'}>
        <div className='  max-w-[400px] h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 relative overflow-hidden' style={{ maxHeight:300}}>
          <Image src={require('../../public/diehard.png')} width={400} height={200} alt={'f'} className=' absolute overflow-hidden'/>
          <h2 className=' text-white shadow-xl relative z-20'>
          Weather App
          </h2>
           
        </div>
        </Link>
        


       
       
      </div>
      </div>
      
    </main>
  )
}
