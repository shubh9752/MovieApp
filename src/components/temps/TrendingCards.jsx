import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const TrendingCards = ({data,setCategory}) => {
  return (
    
       
       <div className='w-[100%]  flex scroll-smooth focus:scroll-auto  gap-x-4 mb-5 overflow-y-hidden'>
           {data.map((i,ind)=>(
            <Link to={`/${i.media_type}/details/${i.id}`} key={ind} className='min-w-[15%]  bg-zinc-900' >
            <img  className='w-full h-[55%] object-cover' src={`https://image.tmdb.org/t/p/original/${i.backdrop_path||i.poster_path}`} alt='img'  />
            <div className='text-white p-3 h-[45%]'>
            <h1 className=' text-xl font-black '>
        {i.name||i.title||i.original_name||i.original_title}
        </h1>
        <p className='   '>
      {i.overview.slice(0,50)}<span className='text-zinc-400'>...More</span>
        </p>
            </div>
            </Link>
           ))}
       </div>
   
  )
}

export default TrendingCards