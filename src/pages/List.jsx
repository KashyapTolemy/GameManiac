import React from 'react'
import { useParams } from "react-router-dom"
import slides from "../mock.json"
import "../App.css"
const List = ({ }) => {
  const { id } = useParams();
  const items = slides.filter(slide => (
    slide.tags.some(tag => tag.name = { id })
  ))
  return (
    <div className='listContainer'>
      <div className='listBox'>
        {/* {items.map.slice(0,2)((item) => (
          <div className='listItem2'>
            <img src={item.background_image} alt={item.name} className="listImage2"></img>
            <div>{item.name}</div>
          </div>
        ))}
        {items.map.slice(2,5)((item) => (
          <div className='listItem3'>
            <img src={item.background_image} alt={item.name} className="listImage3"></img>
            <div>{item.name}</div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default List
