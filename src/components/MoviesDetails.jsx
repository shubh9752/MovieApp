import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovies, removemovies } from '../store/actions/moviesAction'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './temps/Loading'

const MoviesDetails = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    
    const {info}= useSelector((state)=>state.movies)
    const dispatch=useDispatch()
    
    console.log(info)

   
    


    useEffect(()=>{
        dispatch(asyncloadmovies(id));
        return () => dispatch(removemovies);

    },[])
  return info? (
    <div style={{
      background:`linear-gradient(rgba(0,0,,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
     
      backgroundPosition: 'top 10%',
      backgroundSize: 'cover',
      // backgroundOrigin: "content-box";
      backgroundRepeat: 'no-repeat',
      // width: '100%',
      // height: '50vh',

      
  }}  className='w-screen w-screen px-[10%]'>
      <nav className='w-full h-[10vh]  text-zinc-100 flex items-center gap-10 text-2xl '>
      <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line text-xl text-bolder  "></Link>
      <a target='_blank' href={`${info.detail.homepage}`}><i className="ri-home-7-line"></i></a>
      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
      
      <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>iMDB</a>

      </nav>
    </div>
  ):<Loading />
}

export default MoviesDetails