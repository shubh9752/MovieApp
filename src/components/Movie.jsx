import axios from './utils/axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './temps/Loading';
import Cards from './temps/Cards';
import Dropdown from './temps/Dropdown';
import TopNav from './temps/TopNav';

const Movie = () => {
    document.title="ShubhDb||movie"
    const navigate = useNavigate(); 
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    
    const [pages, setPages] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
          const { data } = await axios.get(`movie/now_playing?page=${pages}`);
          // setMovie(data.results);
          if (data.results.length>0){
            setMovie((prev)=>[...prev,...data.results] )
            setPages(pages+1)
            
          }else{
            setHasMore(false)
    
          }
            
        } catch (error) {
          console.error('Error fetching wallpaper:', error);
        }
      };
      const pageHandler=()=>{
        if(movie.length===0){
          getMovie()
        }else{
          setPages(1)
          setMovie([])
          getMovie()
        }
    
      }
    
      useEffect(() => {
        pageHandler()
      }, [category]);
  return movie.length > 0 ? (
    <div className='w-screen h-screen  pt-[1%]  '>
      <div className='w-full flex items-center'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-go-back-line text-xl text-zink-700 text-bolder"></i>
        <h1 className='text-2xl text-zinc-400 font-semibold w-[20%] ml-4'> Movie-{category}</h1>
        <div className='w-[70%] flex items-center gap-x-8'>
          <TopNav className="ml-[15%]"/>
          <Dropdown title="select category" options={["popular","top_rated","upcoming","now_playing"]} setCategory={(e) => setCategory(e.target.value)}/>
         
        </div>
      </div>
      <InfiniteScroll dataLength={movie.length} next={getMovie} hasMore={hasMore} loader={<h1>...loading</h1>}>
      <Cards data={movie} title={category} />
      </InfiniteScroll>
      
    </div>
  ) : (<Loading />);
}

export default Movie