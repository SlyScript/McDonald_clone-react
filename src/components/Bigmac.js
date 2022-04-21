import React from 'react'
import Buttons from '../components/Buttons'
import freebigmac from '../images/freebigmac.jpg'


function Bigmac() {
    return (
        <div className='aside'>
            <img className='freebigmac-image' src={freebigmac} alt='Freebigmac' />
            <div className='aside-text'>
                <h1 style={{ marginTop: '0px' }}>Free Big Mac Now. Free McDonald's Later.*</h1>
                <p>Get a free Big Mac when you download the McDonald's app and join MyMcDonald's Rewards.</p>
                <small>*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's.</small>
                <br></br>
                <Buttons text="Download the App" />
            </div>
        </div>
    )
}

export default Bigmac