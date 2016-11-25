import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute,hashHistory} from 'react-router';

import Activation from './point/activation';
import {PointCenter} from './point/profile';

import './index.css';

const router=(
    <Router history={hashHistory}>
        <Route path="/activation" component={Activation}></Route>
        <Route path="/" component={Activation}></Route>
        <Route path="/pointCenter" component={PointCenter}></Route>
    </Router>
);

ReactDOM.render(
    router,document.getElementById('root')
);
