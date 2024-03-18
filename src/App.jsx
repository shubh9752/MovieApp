import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/temps/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'
import People from './components/People'
import MoviesDetails from './components/MoviesDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'

const App = () => {
  return (
    <div className="bg-[#1F1E24] h-screen w-screen flex">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/trendings' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/movie/details/:id' element={<MoviesDetails/>}/>
         
       
        <Route path='/tvshows' element={<TvShows/>} />
          
        <Route path='/tv/details/:id' element={<TvDetails/>}/>

        <Route path='/person' element={<People/>} />
        <Route path='/person/details/:id' element={<PersonDetails/>}/>
       
      
    
  
      </Routes>
    </div>
  )
}

export default App