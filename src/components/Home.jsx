import React from 'react'
import SideNav from './temps/SideNav'
import TopNav from './temps/TopNav'

const Home = () => {
    document.title="Home"
  return (
    <>
        <SideNav />
        {/* <div className='w-[20%] h-full bg-red-300'> */}
         
        {/* </div> */}
        <div className='w-[80%] h-full bg-rose-700'>
            <TopNav/>
        </div>
    </>
  )
}

export default Home