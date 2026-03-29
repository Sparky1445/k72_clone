import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeHeroText from '../components/home/homeHeroText.jsx'
import HomeBottomText from '../components/home/homeBottomText.jsx'
import { timeCalculator } from '../utils/timeCalculator.js'
import {useState , useEffect} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { handleHover,childColorChange, loadInAnimation , loadOutAnimation} from '../utils/gsap.js';




const Home = () => {
    const [time,setTime] = useState(timeCalculator());

    useEffect(()=>{
        setInterval(() => {
            setTime(timeCalculator());
        }, 1000);

    },[]);
    
    


    return (
        <>
        {/* Loader Container */}
        <div className='loader fixed inset-0 flex flex-row-reverse  w-full h-full  bg-transparent ' >
            <div className='loader-curtain bg-black h-0 basis-3/20'></div>
            <div className='loader-curtain bg-black h-0 basis-3/20'></div>
            <div className='loader-curtain  bg-black h-0 basis-6/20'></div>
            <div className='loader-curtain bg-black h-0 basis-4/20'></div>
            <div className='loader-curtain bg-black h-0 basis-4/20'></div>
        </div>

        {/* Menu Container */}
        <div className='menu-container fixed w-full h-full bg-black z-11'>
            <div className='cross absolute w-12 h-12 top-10 right-10'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5.00001 5L19 19" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
        </div>

        {/* HTML Elements that are out of the flow of document */}
        <div>
            <div className=' h-screen w-screen fixed'>
                <Video />
            </div>
            {/* k72 logo and menu button */}
            <div className='z-1 fixed w-full top-[0px]  flex justify-end flex-row'>
        <button onClick={()=> { loadInAnimation() }} onMouseEnter={(e) => { handleHover('hoverMaskMenu',e); childColorChange(e,'hamburger-1','hamburger-2') } } onMouseLeave={(e) => { handleHover('hoverMaskMenu',e);  childColorChange(e,'hamburger-1','hamburger-2') } }   className='menu relative w-54 h-12 bg-black flex justify-end items-center ' >
            <div className='hoverMaskMenu absolute w-full h-0 top-0 bg-[#D3FD50]'></div>
                <div className='relative z-10 flex flex-col gap-[5px] pr-8 items-end'>
                    <span className='hamburger-1 w-[50px] bg-white rounded-lg  h-[1.5px] font-weight-400'></span>
                    <span className='hamburger-2  w-[25px] bg-white rounded-lg h-[1.5px] font-weight-400'></span>
                </div>
        </button>
            </div>

            {/* Globe icon with time */}
            <div className='z-12 fixed w-[250px] left-4 bottom-[0px]  flex items-center  flex-row' >
        <svg className='p-0 w-[80px] h-[80px] ' fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48.75" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M14.573,14.172c2.62,0.786,5.588,1.261,8.74,1.338V4.357C19.597,4.867,16.392,8.684,14.573,14.172z"></path> <path d="M23.313,44.764V33.609c-3.154,0.078-6.124,0.553-8.745,1.341C16.387,40.439,19.597,44.253,23.313,44.764z"></path> <path d="M14.061,33.25c2.791-0.855,5.927-1.371,9.252-1.451v-5.613H13.012C13.123,28.697,13.489,31.079,14.061,33.25z"></path> <path d="M12.976,24.374h10.337v-7.053c-3.322-0.079-6.456-0.593-9.244-1.447C13.388,18.457,12.991,21.331,12.976,24.374z"></path> <path d="M17.765,5.352c-3.56,1.199-6.675,3.366-9.044,6.18c1.208,0.792,2.61,1.492,4.167,2.073 C14.05,10.171,15.735,7.309,17.765,5.352z"></path> <path d="M12.372,15.295c-1.755-0.66-3.342-1.461-4.714-2.378c-2.291,3.25-3.662,7.194-3.701,11.457h7.208 C11.18,21.133,11.614,18.062,12.372,15.295z"></path> <path d="M8.726,37.585c2.369,2.813,5.479,4.983,9.039,6.183c-2.03-1.957-3.717-4.816-4.879-8.252 C11.332,36.098,9.934,36.795,8.726,37.585z"></path> <path d="M37.169,24.374h7.313c-0.039-4.263-1.41-8.206-3.701-11.456c-1.397,0.933-3.016,1.747-4.809,2.414 C36.723,18.089,37.152,21.147,37.169,24.374z"></path> <path d="M11.2,26.186H4.023c0.296,3.711,1.604,7.139,3.635,10.02c1.372-0.917,2.958-1.719,4.713-2.379 C11.728,31.473,11.316,28.898,11.2,26.186z"></path> <path d="M35.971,33.789c1.795,0.667,3.414,1.482,4.812,2.417c2.032-2.881,3.338-6.308,3.634-10.021h-7.284 C37.016,28.884,36.607,31.445,35.971,33.789z"></path> <path d="M35.32,26.186H25.124V31.8c3.287,0.079,6.388,0.583,9.153,1.421C34.846,31.057,35.21,28.686,35.32,26.186z"></path> <path d="M25.124,33.609v11.14c3.679-0.567,6.849-4.374,8.647-9.827C31.175,34.152,28.24,33.688,25.124,33.609z"></path> <path d="M30.512,43.823c3.627-1.188,6.795-3.382,9.2-6.238c-1.229-0.806-2.662-1.515-4.253-2.103 C34.287,38.965,32.572,41.857,30.512,43.823z"></path> <path d="M39.716,11.533c-2.405-2.857-5.577-5.048-9.204-6.236c2.061,1.965,3.771,4.861,4.944,8.343 C37.05,13.051,38.482,12.34,39.716,11.533z"></path> <path d="M25.124,4.371V15.51c3.115-0.076,6.047-0.542,8.644-1.311C31.969,8.748,28.803,4.939,25.124,4.371z"></path> <path d="M34.271,15.903c-2.765,0.836-5.863,1.34-9.146,1.418v7.053h10.232C35.341,21.343,34.948,18.479,34.271,15.903z"></path> </g> <path d="M24.374,48.748C10.934,48.748,0,37.814,0,24.374C0,10.934,10.934,0,24.374,0c13.44,0,24.374,10.934,24.374,24.374 C48.748,37.814,37.812,48.748,24.374,48.748z M24.374,2C12.037,2,2,12.037,2,24.374s10.037,22.374,22.374,22.374 s22.374-10.037,22.374-22.374S36.71,2,24.374,2z"></path> </g> </g> </g></svg>
        <span className=' font-weight-700 text-[20px] text-white'>INDIA_</span>
        <span className='font-weight-700 text-[20px] text-white'>{time}</span>     

            </div>

            









            <div className='h-screen w-screen relative flex flex-col justify-between items-center '>
                <HomeHeroText />
            <div className= 'w-1/4 text-white text-left  font-weight-500 w-full flex justify-end'>
                <p className='[text-indent:3rem] mr-7 w-[280px] tracking-tighter font-semibold '>K72 is an agency that builds brands 
                    from every angle. Today, tomorrow and years 
                    from now. We think the best sparks fly when 
                    comfort zones get left behind and friction 
                    infuses our strategies, brands and 
                    communications with real feeling. We’re 
                    transparent, honest and say what we mean,
                     and when we believe in something, we’re all 
                     in.
</p>
            </div>
                <span className='flex flex-row justify-between items-center gap-x-10 mb-4'>
                <HomeBottomText text="WORK" />
                <HomeBottomText text="AGENCY" />
                </span>
            </div>
            </div>
        </>
    )
}

export default Home