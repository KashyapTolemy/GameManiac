import React from "react";

export default function Recommendation({slides}){
    return(
        <div className="recommendcontainer">
            <h2 className="boxtitle">Top Rated Games </h2>
            <div className="recommendboxes">
                {boxes.map((box)=>(
                    <div key={box.id}>
                        <img className ="horizontalbox" src={box.background_image} alt ={box.name}></img>
                        <h4 className="titleratingrecommend">{box.name}({box.rating}/{box.rating_top})</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}