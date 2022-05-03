import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import archeslogo from '../images/archeslogo.jpg'

function Navbar() {

  return (
    <div className='nav'>
      <Link to="/"><img style={{ margin: '15px 25px' }} src={archeslogo} alt='Golden Arches' /></Link>
      

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
            <Link to="/ourmenu">Our Menu</Link>
            <Link to="/downloadapp">Download App</Link>
            <Link to="/rewards">My McDonald's Rewards</Link>
            <Link to="/exclusivedeals">Exclusive Deals</Link>
            <Link to="/aboutourfood">About Our Food</Link>
          </ul>
        </div>
      </div>

    </div>
  )
};

export default Navbar