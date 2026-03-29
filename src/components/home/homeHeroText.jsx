import React from 'react'
import Video from './Video.jsx'
const HomeHeroText = () => {
    return (
        <div>
            <div className='flex flex-col font-arial '>

                <div className='relative  inline-block  flex justify-center overflow-hidden '>
                <span className='text-[150px] leading-[0.8] text-white tracking-wide text-center p-0 m-0'>
                    THE SPARK FOR 
                </span>
                </div>
                <div className='relative inline-block  flex justify-center overflow-hidden'>
                    <span className='text-[160px] leading-[0.8] text-white tracking-tight text-center p-0 m-0'>
                    ALL <div className=" m-0 p-0 w-60 h-28 inline-block rounded-[999px] overflow-hidden bg-red-500">
                          <video className='h-full w-full object-cover  rounded-lg' autoPlay loop muted src="../../../assets/k72bg.mp4"></video>
                          </div>
                           THINGS
                </span>
                </div>
                <div className='relative inline-block flex   overflow-hidden'>
                    <span className=' pl-40 text-[160px] leading-[0.8] text-white tracking-tight  p-0 m-0'>CREATIVE</span>

                </div>

                
            </div >
        </div >
    )
}

export default HomeHeroText;
