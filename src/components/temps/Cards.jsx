import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
  console.log(data);
  return (
    <div className=' h-full w-full flex flex-wrap gap-y-8 gap-x-8 mr-[5%] px-[5%] bg-[#1F1E24] '>
      {data.map((item, index) => (
        <Link to={`/${item.id}`} className='w-[25vh] ' key={index}>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path|| item.profile_path}`} className='h-[40vh] object-cover shadow-md' alt='' />
          <h1 className='text-2xl text-zinc-300 mt-1 font-semibold'>{item.name || item.title || item.original_name || item.original_title}</h1>
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;