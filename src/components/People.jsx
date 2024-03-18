import axios from './utils/axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './temps/Loading';
import Cards from './temps/Cards';
import Dropdown from './temps/Dropdown';
import TopNav from './temps/TopNav';

const People = () => {
    document.title="ShubhDb||person"
    const navigate = useNavigate(); 
    const [category, setCategory] = useState("popular");
    const [person, setPersons] = useState([]);
    
    const [pages, setPages] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPersons = async () => {
        try {
          const { data } = await axios.get(`person/popular?page=${pages}`);
          // setPersons(data.results);
          if (data.results.length>0){
            setPersons((prev)=>[...prev,...data.results] )
            setPages(pages+1)
            
          }else{
            setHasMore(false)
    
          }
            
        } catch (error) {
          console.error('Error fetching wallpaper:', error);
        }
      };
      const pageHandler=()=>{
        if(person.length===0){
          getPersons()
        }else{
          setPages(1)
          setPersons([])
          getPersons()
        }
    
      }
    
      useEffect(() => {
        pageHandler()
      }, [category]);
  return person.length > 0 ? (
    <div className='w-screen h-screen  pt-[1%]  '>
      <div className='w-full flex items-center'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-go-back-line text-xl text-zink-700 text-bolder"></i>
        <h1 className='text-2xl text-zinc-400 font-semibold w-[20%] ml-4'> People-{category}</h1>
        <div className='w-[70%] flex items-center gap-x-8'>
          <TopNav className="ml-[15%]"/>
         
         
        </div>
      </div>
      <InfiniteScroll dataLength={person.length} next={getPersons} hasMore={hasMore} loader={<h1>...loading</h1>}>
      <Cards data={person} title="person" />
      </InfiniteScroll>
      
    </div>
  ) : (<Loading />);
}

export default People