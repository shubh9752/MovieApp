import axios from './utils/axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './temps/Loading';
import Cards from './temps/Cards';
import Dropdown from './temps/Dropdown';
import TopNav from './temps/TopNav';

const TvShows = () => {
    document.title="ShubhDb||tv"
    const navigate = useNavigate(); 
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    
    const [pages, setPages] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTv = async () => {
        try {
          const { data } = await axios.get(`tv/${category}?page=${pages}`);
          // setTv(data.results);
          if (data.results.length>0){
            setTv((prev)=>[...prev,...data.results] )
            setPages(pages+1)
            
          }else{
            setHasMore(false)
    
          }
            
        } catch (error) {
          console.error('Error fetching wallpaper:', error);
        }
      };
      const pageHandler=()=>{
        if(tv.length===0){
          getTv()
        }else{
          setPages(1)
          setTv([])
          getTv()
        }
    
      }
    
      useEffect(() => {
        pageHandler()
      }, [category]);
  return tv.length > 0 ? (
    <div className='w-screen h-screen  pt-[1%]  '>
      <div className='w-full flex items-center'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-go-back-line text-xl text-zink-700 text-bolder"></i>
        <h1 className='text-2xl text-zinc-400 font-semibold w-[20%] ml-4'> TvShows-{category}</h1>
        <div className='w-[70%] flex items-center gap-x-8'>
          <TopNav className="ml-[15%]"/>
          <Dropdown title="select category" options={["popular","top_rated","on_the_air","airing_today"]} setCategory={(e) => setCategory(e.target.value)}/>
         
        </div>
      </div>
      <InfiniteScroll dataLength={tv.length} next={getTv} hasMore={hasMore} loader={<h1>...loading</h1>}>
      <Cards data={tv} title={category} />
      </InfiniteScroll>
      
    </div>
  ) : (<Loading />);
}

export default TvShows