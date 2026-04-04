import React from "react"
import { handleHover } from "../../utils/gsap";
import RoundedImage from "../../utils/roundedImage";
import { getMenuHoverAnimationTimeline,MenuHoverAnimationPause } from "../../utils/gsap";
const MenuStagger = ({ positionFromTop,image1, text, image2 }) => {
    return (
        <div onMouseEnter={(e) => { getMenuHoverAnimationTimeline().play(); handleHover('hoverMask', e).play(); }} 
        onMouseLeave={(e) => { handleHover('hoverMask', e).reverse(); document.querySelector('.menuAnimationBox1').style.visibility = 'hidden'; MenuHoverAnimationPause(); }}
         className=" h-1/6 bg-black w-full border-grey   border-t border-b absolute z-12">
            <div className={`z-12 hoverMask relative w-full  h-0 top-${positionFromTop} bg-[#D3FD50] flex`}>
            <div className="menuAnimationBox1 flex flex-row justify-center items-center h-full gap-1 invisible">
                    <div className='Image1'>
                       <RoundedImage image={image1} />
                        
                    </div>
                    <div className="mb-2">
                        <span className="text-black whitespace-nowrap text-9xl font-semibold tracking-wider ">
                            {text}
                        </span>
                    </div>
                  <div className="Image2">
                         <RoundedImage image={image2} />
                    </div>
                     <div className="mb-2">
                        <span className="text-black whitespace-nowrap text-9xl font-semibold tracking-wide ">
                            {text}
                        </span>
                    </div>

                    <div className='Image1'>
                       <RoundedImage image={image1} />
                        
                    </div>
                    <div className="mb-2">
                        <span className="text-black whitespace-nowrap text-9xl font-semibold tracking-wider ">
                            {text}
                        </span>
                    </div>

                    <div className='Image1'>
                       <RoundedImage image={image1} />
                        
                    </div>
                    <div className="mb-2">
                        <span className="text-black whitespace-nowrap text-9xl font-semibold tracking-wider ">
                            {text}
                        </span>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default MenuStagger