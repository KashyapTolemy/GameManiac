import React from "react";
import pacman from "../images/B.png"
export default function Classic({slides}){
    return(
        <div className="classicContainer">
            {/* <div className="classictitle"></div> */}
            <img classname="pacmanimage" src={pacman} alt="classic"></img>
            <div className="classicimages">
            {slides.slice(0,8).map(slide=>(
                <img src={slide.background_image} alt="gameimages"></img>
            ))}
            </div>   
        </div>
    )
}