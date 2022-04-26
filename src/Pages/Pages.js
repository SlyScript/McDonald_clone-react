import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Rewards from './Rewards'

function Pages() {
    return (
        <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/rewards" element={<Rewards />} />
            
        </Switch>

    )
}

export default Pages