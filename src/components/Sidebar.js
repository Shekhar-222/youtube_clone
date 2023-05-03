import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const isMenuOpen =useSelector(store => store.app.isMenuOpen)

    if(!isMenuOpen) return null   //this is called early returns
 
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul className='m-4'>
           <Link to="/"> <li>Home</li></Link>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <hr />
        <ul className='m-4'>
            <li>Libarary</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch later</li>
            <li>Liked Videos</li>
        </ul>
        <hr />
        <h1 className='font-bold'>Subscription</h1>
        <ul className='m-4'>
            <li>Music</li>
            <li>Sport</li>
            <li>Gaming</li>
            <li>Movie</li>
            
        </ul>
    </div>
  )
}

export default Sidebar