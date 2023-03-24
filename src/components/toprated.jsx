import React from "react";
import { useState,useEffect } from "react";

export default function Toprated({boxes}){
    const [sortedData,setsortedData] =useState([])
    useEffect(() => {
        const sorted = [...boxes].sort((a, b) => b.rating - a.rating);
        setsortedData(sorted);
      }, []);
      console.log(sortedData)
    return(
        <div className="recommendcontainer">
            <h2 className="boxtitle">TOP RATED GAMES </h2>
            <div className="recommendboxes">
                {sortedData.slice(0,10).map((box)=>(
                    <div key={box.id}>
                        <img className ="horizontalbox" src={box.background_image} alt ={box.name}></img>
                        <h4 className="titleratingrecommend">{box.name}({box.rating}/{box.rating_top})</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}