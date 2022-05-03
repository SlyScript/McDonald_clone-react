import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bigmac from '../components/Bigmac'
import largefries from '../images/LargeFries.jpg'
import freefries from '../images/FreeFries.jpg'
import cafe from '../images/Cafe.jpg'
import deliver from '../images/deliver.jpg'
import Buttons from '../components/Buttons'

function ExclusiveDeals() {
    return (
        <div>
            <Navbar />
            <h1 className='title'>ExclusiveDeals</h1>
            <Bigmac />

            <div>
                <h1>More Points Unlock More Rewards</h1>
                <p> Points Unlock More Rewards
                    It's easy to track your McDonald's points and see how far you are from unlocking the next tier of free McDonald's.</p>
                <div className='side'>
                    <div className='side-inner'>
                        <img className='rewards_points' src={largefries} alt=''></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>$1 Large Fries*</h1>
                            <p>Large Fries mean you still have enough after sharing with friends. Get 'em for $1—only in our app.</p>
                            <small>*Offer Valid thru 12/31/22 at participating McDonald's. Valid 1x/Week. Refer to McD app for details.
                                Mobile Order & Pay at Participating McDonald's. McD app download and registration required.
                                © 2022 McDonald's</small>
                                <br></br>
                            <Buttons text='Order in App' />
                        </div>
                    </div>

                    <div className='side-inner'>
                        <img className='rewards_points' src={cafe} alt=''></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>$0.99 Any Size Premium Roast Coffee or Iced Coffee*</h1>
                            <p>Ice-cold or deliciously hot, get it anytime for just $0.99.</p>
                            <small>*Offer Valid thru 12/31/22 at participating McDonald's. Valid 1x/Week. Refer to McD app for details.
                                Mobile Order & Pay at Participating McDonald's. McD app download and registration required.
                                © 2022 McDonald's</small>
                                <br></br>
                            <Buttons text='Use the App to Order' />
                        </div>
                    </div>
                </div>

                <div className='side'>
                    <div className='side-inner'>
                        <img className='rewards_points' src={freefries} alt='glazed Donut'></img>
                        <div className='aside-text'>
                            <h1 style={{ marginTop: '0px' }}>$1 Large Fries*</h1>
                            <p>Enjoy free medium Fries with any $1 minimum Mobile Order & Pay purchase, only in the app.*
                                After all—without free Fries, Fridays are just another day.</p>
                            <small>*Valid 1x each Friday thru 12/31/22 with minimum purchase of $1 (excluding tax).
                                McDonald's app download and registration required. Mobile Order & Pay at participating McDonald's.</small>
                            <br></br>
                            <Buttons text='Order in App' />
                        </div>
                    </div>
                </div>

                <div className='aside'>
                    <img className='freebigmac-image' src={deliver} alt='glazed Donut'></img>
                    <div className='aside-text'>
                        <h1 style={{ marginTop: '0px' }}>Get Your Free Fries* with Contactless Mobile Ordering and Curbside Pickup</h1>
                        <p>Get free medium Fries every Friday, exclusively with Mobile Order & Pay with any minimum $1 purchase.*</p>
                        <small>*Offer valid 1x each Friday thru 12/31/22 with minimum purchase of $1 (excluding tax). McD app download and
                            registration required. Offer only available through Mobile Order & Pay. Mobile Order &
                            Pay at participating McDonald's. ©2022 McDonald's</small>
                        <br></br>
                        <Buttons text="Use the App to Order" />
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default ExclusiveDeals;