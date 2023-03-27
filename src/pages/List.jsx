import React from 'react'
import { useParams } from "react-router-dom"
import data from "../mock.json"
import "../App.css"
const List = ({}) => {
  const { slides } = useParams();

  const slideObjects = slides
    ? slides.split(',').map((slide, index) => {
        if (slide.includes(':')) {
          const [url, title] = slide.split(':');
          return { id: index, url, title };
        } else {
          return { id: index, url: slide, title: '' };
        }
      })
    : [];
  return (
    <div className='listContainer'>
      ebvrissfs
    </div>
  )
}

export default List
