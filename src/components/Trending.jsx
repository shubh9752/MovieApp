import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from './temps/TopNav'
import Dropdown from './temps/Dropdown'
import axios from '../components/utils/axios'
import Cards from './temps/Cards'
import Loading from './temps/Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Trending = () => {
  document.title="ShubhDb||Popular"
  const navigate = useNavigate(); 
  const [category, setCategory] = useState("all");
  const [trendings, setTrendings] = useState([]);
  const [duration, setDuration] = useState("day");
  const [pages, setPages] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}?page=${pages}`);
      // setTrendings(data.results);
      if (data.results.length>0){
        setTrendings((prev)=>[...prev,...data.results] )
        setPages(pages+1)
        
      }else{
        setHasMore(false)

      }
        
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
    }
  };
  const pageHandler=()=>{
    if(trendings.length===0){
      getTrending()
    }else{
      setPages(1)
      setTrendings([])
      getTrending()
    }

  }

  useEffect(() => {
    pageHandler()
  }, [duration, category]);

  return trendings.length > 0 ? (
    <div className='w-screen h-screen  pt-[1%]  '>
      <div className='w-full flex items-center'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-go-back-line text-xl text-zink-700 text-bolder"></i>
        <h1 className='text-2xl text-zinc-400 font-semibold w-[20%] ml-4'> Trendings</h1>
        <div className='w-[70%] flex items-center gap-x-8'>
          <TopNav className="ml-[15%]"/>
          <Dropdown title="select category" options={["all", "movie", "tv"]} setCategory={(e) => setCategory(e.target.value)}/>
          <Dropdown title="Duration" options={["week", "day"]} setDuration={(e) => setDuration(e.target.value)}/> {/* Corrected to setDuration */}
        </div>
      </div>
      <InfiniteScroll dataLength={trendings.length} next={getTrending} hasMore={hasMore} loader={<h1>...loading</h1>}>
      <Cards data={trendings} title={category} />
      </InfiniteScroll>
      
    </div>
  ) : (<Loading />);
};

export default Trending