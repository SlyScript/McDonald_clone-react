import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import archeslogo from '../images/archeslogo.jpg'
import Rewards from '../Pages/Rewards'
import Home from '../Pages/home'
import AboutFood from '../Pages/AboutFood'
import ExclusiveDeals from '../Pages/ExclusiveDeals'
import DownloadApp from '../Pages/DownloadApp'


function Navbar() {

  return (
    <div className='nav'>

      <img style={{ margin: '15px 25px' }} src={archeslogo} alt='Golden Arches' />

      <div className='navbar'>
        <div className='nav-layer-1'>
          <ul className='nav-layer-1-left'>
            <li>Language</li>
            <li>Sign Up for Email</li>
            <li>Careers</li>
          </ul>

          <ul className='nav-layer-1-right'>
            <li>Search</li>
            <a style={{ fontSize: '13px', marginRight: '20px' }}>Change your Location</a>
            <Buttons text="Order Now" />
          </ul>
        </div>

        <div>
          <ul className='nav-layer-2'>
          <li>Our Menu</li>
            <li>Download App</li>
            <Link to="/rewards">My McDonald's Rewards</Link>
            <li>Exclusive Deals</li>
            <li>About Our Foods</li>
          </ul>
        </div>
      </div>

    </div>
  )
};

export default Navbar