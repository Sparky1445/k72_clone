import React from "react"
import { handleHover } from "../../utils/gsap";

const MenuStagger = ({ image1, text, image2 }) => {
    return (
        <div onMouseEnter={(e) => { handleHover('hoverMask', e).play(); }} onMouseLeave={(e) => { handleHover('hoverMask', e).reverse(); }} className=" h-1/6 bg-black w-full border-grey  border-t border-b absolute z-20">
            <div className='z-20 hoverMask relative w-full h-0 top-0 bg-[#D3FD50]'>
                <div className="flex flex-row justify-center items-center h-full">
                    <div className='Image1'>
                        HEllo
                    </div>
                    <div>
                        <h1>
                            SEE US AROUND
                        </h1>
                    </div>
                    <div className="Image2">
                        Hello2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MenuStagger