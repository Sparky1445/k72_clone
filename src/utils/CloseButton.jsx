import React from 'react'
import { closeButtonOutAnimation, closeMenuAnimation } from './gsap.js'

const CloseButton = () => {


    return (
        <div onClick={()=> { closeButtonOutAnimation(); closeMenuAnimation()}}  className='opacity-0 invisible closeButton fixed top-0 right-1 z-12'>
            <svg className=' transform translate-x-[150px] cursor-pointer w-[130px] h-[130px] text-white hover:text-[#D3FD50] transition-colors duration-300' viewBox="5.5 5.5 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L16.8995 7.10051" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 7.00001L16.8995 16.8995" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </div>
    )
}

export default CloseButton
