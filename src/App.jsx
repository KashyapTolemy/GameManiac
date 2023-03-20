import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Salespage from './components/salespage'
import page1 from './images/page1.png'
import Carousal from './components/carousal'
import Recommendation from './components/recommendation'
export default function App() {
    return (
      <div>
        <Salespage />
        <Carousal />
        <Recommendation />
      </div>
    )
}

