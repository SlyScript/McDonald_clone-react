import React from 'react'
import Buttons from '../components/Buttons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bigmac from '../components/Bigmac'
import glazed_donut from '../images/glazed_donut.jpg'
import delivery from '../images/delivery.png'
import deals from '../images/deals.jpg'


function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Bigmac />

            <div className='aside'>
                <img className='glazeddonut-image' src={glazed_donut} alt='glazed Donut'></img>
                <div className='aside-text'>
                    <h1 style={{ marginTop: '0px' }}>The Glazed Pull Apart Donut is Back*</h1>
                    <p>Here for just a limited time, this light and airy pull-apart donut is covered in a sweet, delicious glaze.
                        Available all day, pair it with your favorite McCafé drink and tear it apart for poppable snacking!</p>
                    <small>*At participating McDonald's for a limited time.</small>
                    <br></br>
                    <Buttons text="Order Ahead in the App" />
                </div>
            </div>

            <div className='aside'>
                <img className='freebigmac-image' src={delivery} alt='glazed Donut'></img>
                <div className='aside-text'>
                    <h1 style={{ marginTop: '0px' }}>Order McDelivery® Now*</h1>
                    <p>Get all your McDonald's favorites delivered right to your doorstep with McDelivery® on Uber Eats or DoorDash.</p>
                    <small>*At participating McDonald's. Prices may be higher than at restaurants. Delivery/service fees apply</small>
                    <br></br>
                    <Buttons text="Order McDelivery Now" />
                </div>
            </div>

            <div className='aside'>
                <img className='freebigmac-image' src={deals} alt='glazed Donut'></img>
                <div className='aside-text'>
                    <h1 style={{ marginTop: '0px' }}>Deals for Days</h1>
                    <p>Get exclusive deals on your McDonald's favorites in the app with contactless Mobile Order & Pay* 
                        and convenient Drive Thru or Curbside pickup.</p>
                    <small>*Mobile Order & Pay at participating McDonald’s.</small>
                    <br></br>
                    <Buttons text="Get App Deals" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home

