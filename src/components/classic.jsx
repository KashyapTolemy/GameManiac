import React from "react";

export default function Classic({slides}){
    return(
        <div className="classicContainer">
            <div className="classictitle"></div>
            <div className="classicimages">
            {slides.map(slide=>(
                <img src={slide.background_image}></img>
            ))}
            </div>   
        </div>
    )
}