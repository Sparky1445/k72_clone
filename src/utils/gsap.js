import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

let tl1 = gsap.timeline(); // For the hover
let tl2 = gsap.timeline(); // For the loader
let tl3 = gsap.timeline(); // For the menu
let tl4 = gsap.timeline(); // For the closeButton
let menu = document.querySelector(".menu");
console.log(menu);

export const childColorChange = (e,...classNames) =>{
    if(e.type === "mouseenter"){
    classNames.forEach((className) => {
        gsap.to("."+className,{
            duration:0.2,
            backgroundColor:"#000",
            color:"#111",
        })
    })
    }
    else if(e.type === "mouseleave"){
        classNames.forEach((className) => {
            gsap.to("."+className,{
                duration:0.2,
                backgroundColor:"#fff",
                color:"#fff",
                delay:0
            })
        })
    }
}


export const handleHover = (className,e) =>{
    
    let hoverAnimation = tl1.to("."+className,{
            duration:0.2,
            height:"100%",
            delay:0,
            ease:"power1.inOut",
        })

    if(e.type === "mouseenter"){
        hoverAnimation.play();
        
    }

    else if (e.type === "mouseleave"){
        hoverAnimation.reverse();
    }
        
}

export const loadInAnimation = ()=>{

    const loaderSpread = tl2.to(".loader",{
        duration:0.01,
        delay:0,
        zIndex:10,
    })

    const loaderCurtain = tl2.to(".loader-curtain",{
        duration:0.3,
        height:"100%", 
        delay:0,
        ease:"power1.in",
        stagger:0.1,
    })
    loaderSpread.play();
    loaderCurtain.play();
}

export const loadOutAnimation = ()=>{
       const loaderOut = tl2.to(".loader-curtain",{
        duration:0.3,
        height:0, 
        delay:0,
        ease:"power1.out",
        stagger:0.1,
        onComplete: () => {
            const loader = document.querySelector(".loader");
            loader.style.zIndex = -1;
            
        }
       })

       loaderOut.play();
       
}

export const closeButtonAnimation = ()=>{
    const closeButton = tl4.to(".closeButton",{
        duration:0.4,
        transform: "translateX(-150px)",
        delay:0,
        opacity:1,
        visibility:"visible",
        ease:"power1.inOut",        
    })
    closeButton.play();
}

export const closeButtonAnimationOut = ()=>{
    const closeButton = tl4.to(".closeButton",{
        duration:0.4,
        transform: "translateX(150px)",
        delay:0,
        opacity:0,
        ease:"power1.inOut",
        
    })
    closeButton.play();
}



