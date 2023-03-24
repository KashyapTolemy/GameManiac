import React from "react";
import pacman from "../images/B.png"
export default function Classic({slides}){
    const classicsItems = slides.filter(slide => {
        return slide.tags.some(tag => tag.name === 'Classic');
      });
    console.log(classicsItems)
    return(
        <div className="classicContainer">
            <img classname="pacmanimage" src={pacman} alt="classic"></img>
            <div className="classicimages">
            {classicsItems.slice(0,8).map(classicitem=>(
                <img src={classicitem.background_image} alt="gameimages"></img>
            ))}
            </div>   
        </div>
    )
}