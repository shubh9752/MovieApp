import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    // console.log(data);
    const backgroundImage = data && (data.poster_path || data.backdrop_path)
    ? `linear-gradient(rgba(0,0,,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.poster_path || data.backdrop_path})`
    : 'linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.6), rgba(0,0,0,.9))';
  return (
    <div style={{
        background:backgroundImage,
       
        backgroundPosition: 'top 10%',
        backgroundSize: 'cover',
        // backgroundOrigin: "content-box";
        // backgroundRepeat: 'no-repeat',
        // width: '100%',
        // height: '50vh',

        
    }} className='w-full h-[50vh] flex flex-col justify-end p-[5%]' >
        <h1 className='w-[70%] text-5xl font-bold text-white'>
        {data.name||data.title||data.original_name||data.original_title}
        </h1>
        <p className='w-[70%] mt-3 text-white'>
      {data.overview.slice(0,200)}<Link className='text-blue-400'>...More</Link>
        </p>
        <p className='text-white'>
            <i className='text-yellow-400 ri-megaphone-fill'></i>{data.release_date||"No info"}
            <i className='text-yellow-400 ri-album-fill'></i>{data.media_type.toUpperCase()}
            
        </p>
        <Link className='p-2 rounded w-fit font-semibold bg-pink-200'>Watch Trailor</Link>
    </div>
  )
}

export default Header