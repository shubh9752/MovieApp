import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from './temps/TopNav'
import Dropdown from './temps/Dropdown'
import axios from '../components/utils/axios'
import Cards from './temps/Cards'
import Loading from './temps/Loading'

const Trending = () => {
    const navigate=useNavigate(); 
    const [category, setCategory] = useState("all");
    const [trendings, setTrendings] = useState(null);
    const [duration, setDuration] = useState("day");

    const getTrending = async () => {
        try {
          const { data } = await axios.get(`trending/${category}/${duration}`);
          
          setTrendings(data.results);
        } catch (error) {
          console.error('Error fetching wallpaper:', error);
        }
      };
      console.log(trendings)
    useEffect(()=>{
        getTrending()
    },[duration,category])
  return trendings ? (
    <div className='w-full h-screen px-[3%] pt-[1%] overflow-hidden overflow-y-auto'>
        <div className='w-full flex items-center  '>
           <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-go-back-line text-xl text-zink-700 text-bolder"></i>
           <h1 className='text-2xl text-zinc-400 font-semibold w-[20%]  ml-4'> Trendings</h1>
           <div className='w-[70%] flex items-center gap-x-8 '>
                <TopNav className="ml-[15%]"/>
                <Dropdown title="select category" options={["all","movie","tv"]} setCategory={(e)=>setCategory(e.target.value)}/>
             
                
                <Dropdown title="duration" options={["week","day"]} setDuration={(e)=>setDuration(e.target.value)}/>

           </div>
        </div>
      
        <Cards  data={trendings} title={category} />
        
        
    </div>
  ):(<Loading/>)
};

export default Trending