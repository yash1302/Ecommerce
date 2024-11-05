import React from 'react'
import Forest from '../assets/forest.png'

const ProgressReport = () => {
  return (
    <div className='hidden md:block container mx-auto mt-[4rem] lg:mt-[6rem] relative'>
        <img className='h-[20rem] w-full object-cover' src={Forest} alt="" />
        <div className='absolute top-[5rem] left-0 right-0 bottom-0 text-white m-auto text-center gap-4 flex flex-col'>
            <h1 className='text-2xl lg:text-3xl font-display font-extralight tracking-wide'>We’re on a Mission To Clean Up the Industry</h1>
            <p className='text-sm font-thin font-display'>Read about our progress in our latest Impact Report.</p>
            <button className='w-[8rem] lg:w-[10rem] py-2 lg:py-3 tra text-sm font-thin font-display mx-auto bg-white text-black'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default ProgressReport