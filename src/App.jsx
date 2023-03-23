import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Salespage from './components/salespage'
import Carousel from './components/carousel'
import Recommendation from './components/recommendation'
import slides from './mock.json'
import Genrewise from './components/genrewise'
import Tagwise from './components/tagwise'
import Classic from './components/classic'
import { useEffect } from 'react'

export default function App() {
  // useEffect(async () => {
  //   const res = await fetch("https://api.rawg.io/api/platforms?key=1749e12ccc8b4268bc3e3f4e402b1184")
  //   const data = await res.json()
  //   console.log(data)
  // }, [])
    return (
      <div>
        <Salespage />
        <Carousel slides={slides}/>
        <Recommendation boxes={slides}/>
        <Genrewise slides={slides}/>
        <Tagwise slides={slides}/>
        <Classic slides={slides}/>
      </div>
    )
}

