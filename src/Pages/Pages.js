import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutFood from './AboutFood'
import Home from './home'
import DownloadApp from './DownloadApp'
import ExclusiveDeals from './ExclusiveDeals'
import Rewards from './Rewards'

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/downloadapp" element={<DownloadApp />}/>
            <Route path="/rewards" element={<Rewards />}></Route>
            <Route path="/exclusivedeals" element={<ExclusiveDeals />}/>
            <Route path="/aboutfood" element={<AboutFood />}/>
        </Routes>
    );
};

export default Pages;