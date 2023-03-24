import React from "react";
import awards from "../images/gameawards1.jpg"

export default function awarded({slides}){
    return(
        <div className="awardsContainer">
            <img classname="gameawardimage" src={awards} alt="gameawards"></img>
            <div className="awardsimages">
            {slides.slice(0,6).map(slide=>(
                <img src={slide.background_image} alt="gameimages"></img>
            ))}
            </div> 
        </div>
    )
}