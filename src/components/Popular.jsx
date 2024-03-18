import axios from './utils/axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './temps/Loading';
import Cards from './temps/Cards';
import Dropdown from './temps/Dropdown';
import TopNav from './temps/TopNav';

const Popular = () => {
    document.title="ShubhDb||Popular"
    const navigate = useNavigate(); 
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    
    const [pages, setPages] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPopular = async () => {
        try {
          const { data } = await axios.get(`${category}/popular?page=${pages}`);
          // setPopular(data.results);
          if (data.results.length>0){
            setPopular((prev)=>[...prev,...data.results] )
            setPages(pages+1)
            
          }else{
            setHasMore(false)
    
          }
            
        } catch (error) {
          console.error('Error fetching wallpaper:', error);
        }
      };
      const pageHandler=()=>{
        if(popular.length===0){
          getPopular()
        }else{
          setPages(1)
          setPopular([])
          getPopular()
        }
    
      }
    
      useEffect(() => {
        pageHandler()
      }, [category]);
  return popular.length > 0 ? (
    <div className='w-screen h-screen  pt-[1%]  '>
      <div className='w-full flex items-center'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-go-back-line text-xl text-zink-700 text-bolder"></i>
        <h1 className='text-2xl text-zinc-400 font-semibold w-[20%] ml-4'> popular</h1>
        <div className='w-[90%] flex items-center gap-x-8'>
          <TopNav className="ml-[15%]"/>
          <Dropdown title="select category" options={["all", "movie", "tv"]} setCategory={(e) => setCategory(e.target.value)}/>
         
        </div>
      </div>
      <InfiniteScroll dataLength={popular.length} next={getPopular} hasMore={hasMore} loader={<h1>...loading</h1>}>
      <Cards data={popular} title={category} />
      </InfiniteScroll>
      
    </div>
  ) : (<Loading />);
}

export default Popular