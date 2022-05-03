import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import about_food_hero from '../images/about_food_hero.jpg'
import one_left from '../images/one-left.jpg'
import one_right from '../images/one-right.jpg'
import two_left from '../images/two-left.jpg'
import two_right from '../images/two-right.jpg'
import three_left from '../images/three-left.jpg'
import three_right from '../images/three-right.jpg'
import four_left from '../images/four-left.jpg'
import four_right from '../images/four-right.jpg'
import Buttons from '../components/Buttons'


function AboutFood() {
    return (
        <div>
            <Navbar />
            <h1 className='title'>About Our Food</h1>
            <img className='aboutfood-image' src={about_food_hero} alt=''></img>

            <div className='side'>
                <div className='side-inner'>
                    <img className='rewards_points' src={one_left} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Commitment to Quality</h1>
                        <p>We're dedicated to improving the way we prepare our quality food and the ingredients that go into it.</p>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>

                <div className='side-inner'>
                    <img className='rewards_points' src={one_right} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>What's in Your Food</h1>
                        <p>Find out what makes our ingredients special.</p>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>
            </div>

            <div className='side'>
                <div className='side-inner'>
                    <img className='rewards_points' src={two_left} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Our Food Philosophys</h1>
                        <p>We're passionate about our food. That's why we're committed to always evolving what matters to you.</p>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>

                <div className='side-inner'>
                    <img className='rewards_points' src={two_right} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Nutrition Calculator</h1>
                        <p>Our nutrition calculator has the McDonald's menu nutrition information you're seeking. Learn more about your favorite meals.</p>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>
            </div>

            <div className='side'>
                <div className='side-inner'>
                    <img className='rewards_points' src={three_left} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Our Food Experts</h1>
                        <p>From our chefs, to our dieticians and suppliers, McDonald’s food experts care deeply about the food you eat.</p>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>

                <div className='side-inner'>
                    <img className='rewards_points' src={three_right} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Fresh Beef</h1>
                        <p>Our Quarter Pounder®* patty is made with 100% fresh beef and cooked right when you order.
                            It's hot and deliciously juicy and full of flavor</p>
                        <small>*Weight before cooking 4 oz. At participating McDonald's. Fresh Beef available at most restaurants
                            in contiguous US. Not available in Alaska, Hawaii, and US Territories.
                        </small>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>
            </div>

            <div className='side'>
                <div className='side-inner'>
                    <img className='rewards_points' src={four_left} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Happy Meal® Nutrition</h1>
                        <p>When your kids enjoy a meal that's delicious and balanced, you'll enjoy it too.</p>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>

                <div className='side-inner'>
                    <img className='rewards_points' src={four_right} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Variety of Choices</h1>
                        <p>When it comes to quality options, we've got you covered.</p>
                    </div>
                    <br></br>
                    <Buttons text='Learn More' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutFood