import axios from '../../components/utils/axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  
  return (
    <div className='w-[20%] h-full  border-r-2 border-zinc-300 p-3'>
        <h1 className='text-2xl text-white font-bold mr-3'>
        <i className="text-[#6556CD]  ri-movie-2-fill text-2xl"></i>
    
        <span className='ml-4'>Shubh
         Movies DB</span></h1>
         <nav className='flex flex-col text-zinc-400 text-xl'>
            <h1 className='text-white font-semibold text-xl mt-7 mb-3'>new Feeds</h1>
            <Link to='/trendings' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="ri-fire-line "></i> Trending</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="ri-bard-line mr-2"></i>Popular</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="ri-clapperboard-line mr-2"></i>Movies</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="ri-tv-line mr-2"></i>Tv Shows</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="ri-user-search-line mr-2"></i>Peoples</Link>
         </nav>
         <hr className='border-none h-1 bg-zinc-300'/>
         <nav className='flex flex-col text-zinc-400 text-xl'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-3'>Info</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="ri-information-2-line mr-2"></i>About</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="ri-contacts-line mr-2"></i>Contact</Link>
   
         </nav>

    </div>
  )
}

export default SideNav