import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dimage from "../../assets/no-image.jpg"

const TopNav = () => {
    const [searchData,setSearchData]=useState("")
    const [searchResult,setSearchResult]=useState([])
    // console.log(searchData)
    const getSearches=async()=>{
        try {
          const {data}=await axios.get(`/search/multi?query=${searchData}`)
          setSearchResult(data.results)
  
          
          // console.log(searchResult)
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
        getSearches()
        // console.log(searchResult)
      },[searchData])
  return (
    <div className='w-[55%] mx-auto relative  h-[10vh] flex justify-start  items-center'>
        <i className="ri-search-eye-line text-white text-3xl"></i>
        <input className='w-[50%] text-white mx-5 p-5 text-xl border-none outline-none bg-transparent' onChange={(e)=>setSearchData((e.target.value.trimStart()))} value={searchData} type='text ' placeholder='Search Your Movie'  />{searchData.length>0&&<i onClick={()=>setSearchData("")}  className="ri-close-circle-line text-white text-3xl"></i>}
        
        <div className='z-[10] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] left-[5%] no-scrollbar overflow-x-auto'>
        {searchResult.map((i,ind)=>(
            
            <Link to={`/${i.media_type}/details/${i.id}`} key={ind} className='inline-block font-semibold hover:text-black hover:bg-zinc-300 duration-300 p-2 rounded flex justify-start border-b-2 border-zinc-200 text-zinc-600 items-center'>
            <img className='w-[10vh] h-[10vh] mr-4 object-cover' src={i.poster_path || i.backdrop_path ?`https://image.tmdb.org/t/p/original/${i.profile_path||i.poster_path || i.backdrop_path}` : dimage } alt=''/>
            <span>{i.name||i.title||i.original_name||i.original_title}</span>
        </Link>
        ))
            /*  */}
       

        </div>
    </div>
  )
}

export default TopNav