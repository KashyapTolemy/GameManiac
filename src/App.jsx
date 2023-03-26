import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from "./pages/Home"
import Infopage from './pages/Infopage'
import slides from './mock.json'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Infopage />} />
      </Routes>
    </>
  )
}


{/* useEffect(async () => {
    //   const res = await fetch("https://api.rawg.io/api/platforms?key=1749e12ccc8b4268bc3e3f4e402b1184")
    //   const data = await res.json()
    //   console.log(data)
    // }, []) */}