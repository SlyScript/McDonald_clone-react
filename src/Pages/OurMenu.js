import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import beverages from '../images/beverages.jpg'
import combo_meal from '../images/combo_meal.jpg'
import bakery from '../images/bakery.jpg'
import breakfast from '../images/breakfast.jpg'
import desserts_shakes from '../images/desserts_shakes.jpg'
import chicken_sandwich from '../images/chicken_sandwich.jpg'
import burgers from '../images/burgers.jpg'
import happy_meal from '../images/happy_meal.jpg'
import snacks_sides from '../images/snacks_sides.jpg'

function OurMenu() {
    return (
        <div>
            <Navbar />
            <div className='food-menu'>
                <div className='menu'>
                    <div className='menu-row'>
                        <img className='menu-pic' src={beverages} alt='menu' />
                        <p>Beverages</p>
                    </div>

                    <div className='menu'>
                        <img className='menu-pic' src={combo_meal} alt='menu' />
                        <p> Combo Meal</p>
                    </div>

                    <div className='menu'>
                        <img className='menu-pic' src={bakery} alt='menu' />
                        <p>McCafe Bakery</p>
                    </div>
                </div>

                <div>
                    <div className='menu'>
                        <img className='menu-pic' src={breakfast} alt='menu' />
                        <p>Breakfast</p>
                    </div>

                    <div className='menu'>
                        <img className='menu-pic' src={desserts_shakes} alt='menu' />
                        <p>Desserts & Shakes</p>
                    </div>

                    <div className='menu'>
                        <img className='menu-pic' src={chicken_sandwich} alt='menu' />
                        <p>Featured Favorites</p>
                    </div>
                </div>

                <div>
                    <div className='menu'>
                        <img className='menu-pic' src={burgers} alt='menu' />
                        <p>Burgers</p>
                    </div>

                    <div className='menu'>
                        <img className='menu-pic' src={happy_meal} alt='menu' />
                        <p>Happy Meal</p>
                    </div>

                    <div className='menu'>
                        <img className='menu-pic' src={snacks_sides} alt='menu' />
                        <p>Snacks and Slides</p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <button className='menu-button'>View Full Menu</button>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default OurMenu;