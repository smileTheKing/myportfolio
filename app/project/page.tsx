
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center w-full  ">
    
      <div className=' w-full h-full flex flex-1 items-center justify-center flex-col mt-24 md:mt-24 md:mb-8 md:py-4'>
      <h1 className=' font-bold text-4xl p-4'> Projects</h1>

      <div className='container   h-full  sm:flex-row gap-4 py-24 mt-12   bg-slate-200 flex-1  grid  md:grid-flow-col md:grid-rows-3 md:grid-cols-3  grid-flow-row  grid-rows-1 grid-cols-1 md:rounded-lg'>
        <Link href={'/movie'}>
        <div className=' min-w-[200px] h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4'>
            Movie App
          </div>
        </Link>


        <Link href={'/project/movie'}>
        <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4'>
            Weather App
          </div>
        </Link>

        <Link href={'/project/movie'}>
          <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 '>
            Shopping App
          </div>
        </Link>

        <Link href={'/project/movie'}>
          <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 '>
            Shopping App
          </div>
        </Link>
        <Link href={'/project/movie'}>
          <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 '>
            Shopping App
          </div>
        </Link>
        <Link href={'/project/movie'}>
          <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 '>
            Shopping App
          </div>
        </Link>

        <Link href={'/project/movie'}>
          <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 '>
            Shopping App
          </div>
        </Link>
        <Link href={'/project/movie'}>
          <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 '>
            Shopping App
          </div>
        </Link>
        <Link href={'/project/movie'}>
          <div className=' min-w-[200px]  h-[150px] bg-white items-center flex justify-center rounded-lg shadow-xl font-bold text-[2ch] p-4 '>
            Shopping App
          </div>
        </Link>
       
      </div>
      </div>
      
    </main>
  )
}
