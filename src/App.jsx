import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/temps/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'

const App = () => {
  return (
    <div className="bg-[#1F1E24] h-screen w-screen flex">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/trendings' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
    
  
      </Routes>
    </div>
  )
}

export default App