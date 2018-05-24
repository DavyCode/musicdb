import React from 'react'
import { 
    BrowserRouter,
    Route 
} from 'react-router-dom';

import Home from '../Home'
import Artist from '../Artist'

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/artist/:artistId" component={Artist}/>
        </div>   
    </BrowserRouter>
);