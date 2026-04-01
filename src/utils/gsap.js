import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

let menuTimeline = null ;
let hoverAnimation = null ;
let closeButtonAnimation = null ;

function getMenuTimeline(){
    if(!menuTimeline){
        menuTimeline = gsap.timeline({paused:true});
        menuTimeline.addLabel('menuAnimationStart')
            .to(".loader",{
                duration:0.01,
                delay:0,
                zIndex:10,
            })
            .to(".loader-curtain",{
                duration:0.3,
                height:"100%", 
                delay:0,
                ease:"power1.in",
                stagger:0.1,
            })
           .addPause();
    }
    return menuTimeline;
}

export const openMenuAnimation = ()=>{
    getMenuTimeline().play();
}
export const closeMenuAnimation = ()=>{
    getMenuTimeline().reverse();
}

function getCloseButtonAnimation(){
    if(!closeButtonAnimation){
        closeButtonAnimation = gsap.timeline({paused:true});
        closeButtonAnimation.addLabel('closeButtonAnimationStart')
            .to(".closeButton",{
                duration:0.4,
                transform: "translateX(-150px)",
                delay:0,
                opacity:1,
                visibility:"visible",
                ease:"power1.out",        
    }).addPause();
    }
    return closeButtonAnimation;
}

export const closeButtonInAnimation = ()=>{
    getCloseButtonAnimation().play();
}
export const closeButtonOutAnimation = ()=>{
    getCloseButtonAnimation().reverse();
}


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
        if(!hoverAnimation){
            hoverAnimation = gsap.timeline({paused:true});
            hoverAnimation.to("."+className,{
            duration:0.175,
            height:"100%",
            delay:0,
            ease:"power1.inOut",
        }).addPause();
        }
        return hoverAnimation;        
}



