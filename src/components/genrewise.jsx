import React from "react";
export default function Genrewise({slides}){

    return(
        <div className="genrewisecontainer">
            <h2 className="genrewisetitle">BROWSE BY CATEGORY</h2>
            <div className="genrewiseimages">
                <div className="actionimg"></div>
                <div className="adventureimg"></div>
                <div className="rpgimg"></div>
                <div className="survivalimg"></div>
                <div className="puzzleimg"></div>
            </div>
        </div> 
    )
}