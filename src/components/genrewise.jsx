import React from "react";
import Action from "../images/action.png"
import Adventure from "../images/adventure.png"
import Rpg from "../images/rpg.png"
import Survival from "../images/survival.png"
import Puzzle from "../images/puzzle.png"


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
                <img src={Adventure} alt="adventure"className="adventureimg"></img>
                <img src={Rpg} alt="rpg" className="rpgimg"></img>
                <img src={Survival} alt="survival" className="survivalimg"></img>
                <img src={Puzzle} alt="puzzle" className="puzzleimg"></img>
            </div>
        </div> 
    )
}