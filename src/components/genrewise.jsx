import React from "react";
import Action from "../images/action.png"
import Adventure from "../images/adventure.png"
import Rpg from "../images/rpg.png"
import Survival from "../images/survival.png"
import Puzzle from "../images/puzzle.png"
import { Link } from "react-router-dom";

export default function Genrewise({ slides }) {
  const actionitems = slides.filter(slide => (
    slide.tags.some(tag => tag.name = 'Action')
  ))
  const adventureitems = slides.filter(slide => {
    return slide.tags.some(tag => tag.name = 'Adventure')
  })
  const rpgitems = slides.filter(slide => {
    return slide.tags.some(tag => tag.name = 'RPG')
  })
  const survivalitems = slides.filter(slide => {
    return slide.tags.some(tag => tag.name = 'Shooter')
  })
  const puzzleitems = slides.filter(slide => {
    return slide.tags.some(tag => tag.name = 'Puzzle')
  })
  const actionitemsString = actionitems.map(actionitem => {
    if (Array.isArray(actionitem)) {
      return actionitem.join(':');
    } else {
      return actionitem.toString();
    }
  }).join(',');
  const actionUrl = `/category/${actionitemsString}`
  const adventureitemsString = adventureitems.map(adventureitem => {
    if (Array.isArray(adventureitem)) {
      return adventureitem.join(':');
    } else {
      return adventureitem.toString();
    }
  }).join(',');
  const adventureUrl = `/category/${adventureitemsString}`
  const rpgitemsString = rpgitems.map(rpgitem => {
    if (Array.isArray(rpgitem)) {
      return rpgitem.join(':');
    } else {
      return rpgitem.toString();
    }
  }).join(',');
  const rpgUrl = `/category/${rpgitemsString}`
  const survivalitemsString = survivalitems.map(survivalitem => {
    if (Array.isArray(survivalitem)) {
      return survivalitem.join(':');
    } else {
      return survivalitem.toString();
    }
  }).join(',');
  const survivalUrl = `/category/${survivalitemsString}`
  const puzzleitemsString = puzzleitems.map(puzzleitem => {
    if (Array.isArray(puzzleitem)) {
      return puzzleitem.join(':');
    } else {
      return puzzleitem.toString();
    }
  }).join(',');
  const puzzleUrl = `/category/${puzzleitemsString}`
  // console.log(puzzleitems)
  return (
    <div className="genrewisecontainer">
      <h2 className="genrewisetitle">BROWSE BY CATEGORY</h2>
      <div className="genrewiseimages">
        <Link to={actionUrl}><img src={Action} alt="action" className="actionimg"></img></Link>
        <Link to={adventureUrl}><img src={Adventure} alt="adventure" className="adventureimg"></img></Link>
        <Link to={rpgUrl}><img src={Rpg} alt="rpg" className="rpgimg"></img></Link>
        <Link to={survivalUrl}><img src={Survival} alt="survival" className="survivalimg"></img></Link>
        <Link to={puzzleUrl}><img src={Puzzle} alt="puzzle" className="puzzleimg"></img></Link>

      </div>
    </div>
  )
}