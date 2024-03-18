
import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
  console.log(title);
  return (
    <div className=' h-full w-full flex flex-wrap  px-[5%] bg-[#1F1E24] '>
      {data.map((item, index) => (
        <Link to={`/${item.media_type || title}/details/${item.id}`} className=' relative w-[25vh] mr-[5%] mb-[5%] ' key={index}>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path|| item.profile_path}`} className='h-[40vh] object-cover shadow-[8px_17px_38px__2px_rgba(0,0,0,.5)]' alt='' />
          <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>{item.name || item.title || item.original_name || item.original_title}</h1>
          {item.vote_average&&(
            <div className='absolute right-[-12%] top-[20%] rounded-full text-white w-[6vh] h-[6vh]  flex justify-center items-center bg-yellow-400 text-xl font-semibold'>
            {(item.vote_average*10).toFixed()}<sup>%</sup>
          </div>
          )}
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;