import React from 'react'
import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import Bigmac from '../components/Bigmac'
import Footer from '../components/Footer'
import rewards_food from '../images/rewards_food.jpg'
import rewards_points from '../images/rewards_points.jpg'
import rewards_left from '../images/rewards_left.jpg'
import rewards_middle from '../images/rewards_middle.jpg'
import rewards_right from '../images/rewards_right.jpg'
import rewards_1500 from '../images/rewards_1500.jpg'
import rewards_3000 from '../images/rewards_3000.jpg'
import rewards_4500 from '../images/rewards_4500.jpg'
import rewards_6000 from '../images/rewards_6000.jpg'



function Rewards() {
    return (
        <div>
            <Navbar />
            <Bigmac />
            <div className='side'>
                <div className='side-inner'>
                    <img className='rewards_food' src={rewards_food} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Free Reward After Your First Order*</h1>
                        <p>Join MyMcDonald's Rewards in the app today and get your choice of Hash Browns, Vanilla Cone,
                            McChicken® or a Cheeseburger free after your first order.</p>
                        <small>*Valid 1x thru 3/31/22 for first time MyMcDonald's Rewards users.
                            Program available only at participating McDonald's. Refer to MyMcDonald's Program Terms for details.
                            Excludes delivery. McD app download and registration required.</small>
                        <br></br>
                        <Buttons text="Download App" />
                    </div>
                </div>

                <div className='side-inner'>
                    <img className='rewards_points' src={rewards_points} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Earn 1500 Bonus Points</h1>
                        <p>Get all your McDonald's favorites delivered right to your doorstep with McDelivery® on Uber Eats or DoorDash.</p>
                        <small>*Valid 1x thru 12/31/22 at participating McDonald's. This offer is intended only for use by the recipient of the offer and this MyMcDonald's Rewards account.
                            Bonus points may take up to 10 days to appear in your account. Rewards program available only at participating McDonald's.
                            Excludes delivery. McDonald's app download and registration required.</small>
                        <br></br>
                        <Buttons text="Link Payment Now in the App" />
                    </div>
                </div>
            </div>

            <div>
                <h1>Provide One Code to Earn and Redeem</h1>
                <p>All it takes is one code. Follow these simple steps when ordering to earn MyMcDonald's Rewards points and redeem your favorites.</p>

                <div className='side-rounds'>
                    <div className='side-inner'>
                        <img className='rewards_lmr' src={rewards_left} alt='glazed Donut'></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>Earn Points</h1>
                            <p>Select 'earn points' in the McDonald's app and you'll have access to a 4-digit code to use when you order in the
                                restaurant or Drive Thru. If you use Mobile Order & Pay, you'll automatically earn your points.</p>
                            <br></br>
                        </div>
                    </div>

                    <div className='side-inner'>
                        <img className='rewards_lmr' src={rewards_middle} alt='glazed Donut'></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>Pay with 4-digit Code</h1>
                            <p>Make payment a breeze—link your card details to the app so you can pay with a 4-digit code when ordering.</p>
                            <br></br>
                        </div>
                    </div>

                    <div className='side-inner'>
                        <img className='rewards_lmr' src={rewards_right} alt=''></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>Redeem Rewards</h1>
                            <p>Go to the Rewards tab. There you can select the favorite you want to redeem.
                                Choose “Add to Mobile Order” for contactless ordering or select 'Use at Restaurant' at the store.</p>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div >

            <div>
                <h1>More Points Unlock More Rewards</h1>
                <p> Points Unlock More Rewards
                    It's easy to track your McDonald's points and see how far you are from unlocking the next tier of free McDonald's.</p>
                <div className='side'>
                    <div className='side-inner'>
                        <img className='rewards_points' src={rewards_1500} alt=''></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>1500 Points</h1>
                            <p>Choose your McDonald's item, whether you're craving a McChicken® (Regular or Hot 'N Spicy), Hash Browns,
                                Vanilla Cone or our classic Cheeseburger.</p>
                        </div>
                    </div>

                    <div className='side-inner'>
                        <img className='rewards_points' src={rewards_3000} alt=''></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>3000 Points</h1>
                            <p>Step up and take your pick between medium Fries, Sausage Burrito , 6 pc. Chicken McNuggets® and a large Iced Coffee.</p>
                        </div>
                    </div>
                </div>

                <div className='side'>
                    <div className='side-inner'>
                        <img className='rewards_points' src={rewards_4500} alt='glazed Donut'></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>4500 Points</h1>
                            <p>We're going large with your choice of large Fries, large Frappé, Filet-O-Fish® or Sausage McMuffin® with Egg. </p>
                        </div>
                    </div>

                    <div className='side-inner'>
                        <img className='rewards_points' src={rewards_6000} alt='glazed Donut'></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>6000 Points</h1>
                            <p>Save up your points and you could get a Big Mac®, Quarter Pounder®* with Cheese, Happy Meal® or a Bacon, Egg and Cheese Biscuit!</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
};

export default Rewards;