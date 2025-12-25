import { useState } from 'react'
import './App.css'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'

function App() {
  const [currPage, setCurrPage] = useState("Home")

  return (
    <div>
      < Header />
      {
        currPage === "Home" ? (< Home />) :
        currPage === "AboutUs" ? (<AboutUs />) : null
      }
      < Footer />
    </div>
  )
}

export default App