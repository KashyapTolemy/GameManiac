import React from "react";
import Action from "../images/action.png"
export default function Genrewise({slides}){
    const actionitems = slides.filter(slide=>{
        return slide.tags.some(tag=>tag.name='Action')
    })
    const adventureitems = slides.filter(slide=>{
        return slide.tags.some(tag=>tag.name='Adventure')
    })
    const rpgitems = slides.filter(slide=>{
        return slide.tags.some(tag=>tag.name='RPG')
    })
    const survivalitems = slides.filter(slide=>{
        return slide.tags.some(tag=>tag.name='Shooter')
    })
    const puzzleitems = slides.filter(slide=>{
        return slide.tags.some(tag=>tag.name='Puzzle')
    })
    return(
        <div className="genrewisecontainer">
            <h2 className="genrewisetitle">BROWSE BY CATEGORY</h2>
            <div className="genrewiseimages">
                <img src={Action} alt="action"className="actionimg"></img>
                <div className="adventureimg"></div>
                <div className="rpgimg"></div>
                <div className="survivalimg"></div>
                <div className="puzzleimg"></div>
            </div>
        </div> 
    )
}