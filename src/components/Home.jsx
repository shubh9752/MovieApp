import React, { useEffect, useState } from 'react'
import SideNav from './temps/SideNav'
import TopNav from './temps/TopNav'
import axios from '../components/utils/axios'
import Header from './temps/Header'
import TrendingCards from './temps/TrendingCards'
import Dropdown from './temps/Dropdown'

const Home = () => {
  document.title = "Home";
  const [wallpaper, setWallpaper] = useState(null);
  const [trendings, setTrendings] = useState([]);
  const [category, setCategory] = useState("all")

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get('trending/all/day');
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomWallpaper = data.results[randomIndex];
      setWallpaper(randomWallpaper);
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      
      setTrendings(data.results);
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
    }
  };

  useEffect(() => {

    getTrending()
    
    !wallpaper &&  getHeaderWallpaper();
      
   
   
      
   
  }, [category]);

  console.log(trendings);
  console.log(category);



  return wallpaper ? (
    <>
      <SideNav />
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
        <TopNav />
        <Header data={wallpaper} />
        <div className='p-5 flex justify-between'>
        <h1 className='text-3xl font-semibold text-zinc-400'>
            Trending
        </h1>
        <Dropdown title="Filter" options={["tv","movie","all"]} setCategory={(e)=>setCategory(e.target.value)}/>
       </div>
        <TrendingCards data={trendings} />
      </div>
    </>
  ) : (<h1>loading</h1>);
}

export default Home