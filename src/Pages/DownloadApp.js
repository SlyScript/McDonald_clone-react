import React from 'react'
import Navbar from '../components/Navbar'
import Bigmac from '../components/Bigmac'
import Footer from '../components/Footer'
import app_promo from '../images/app_promo.jpg'
import app_store from '../images/app_store_badge.png'
import google_playstore from '../images/google_play_badge.png'

function DownloadApp() {
    return (
        <div>
            <Navbar />
            <h1 className='title'>McDonald's App</h1>
            <Bigmac />
            <div className='promo'>
                <img src={app_promo}/>
                <div className='promo-content'>
                    <h1>Deliciousness At Your Fingertips</h1>
                    <h4>Download the app for exclusive deals and easy ordering.</h4>
                    <div className='app-images'>
                        <img src={app_store} />
                        <img src={google_playstore} />
                    </div>
                </div>
            </div>
            <div className='promo-text'>
            <h2>Deals and Much More</h2>
            <p>With the McDonald's app, you'll get access to exclusive deals. Use the app to order ahead and pass the line with 
                Mobile Order & Pay plus join MyMcDonald's Rewards to earn points on every order to redeem for free McDonald's.</p>
            </div>
            
            <Footer />
        </div>
    )
}

export default DownloadApp;