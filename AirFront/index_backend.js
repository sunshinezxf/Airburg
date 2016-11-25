import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute,hashHistory} from 'react-router';

import * as MC from './backend/manageCustomer';
import {CustomerForm} from './backend/customerForm';
import './index.css';

const router=(
    <Router history={hashHistory}>
        <Route path="/" component={MC.Main}>
            <IndexRoute component={MC.Home}/>
            <Route path="customer" component={MC.CustomerTable}/>
            <Route path="customerPoint" component={MC.PointTable}/>
            <Route path="pointRecord" component={MC.PointTable}/>
            <Route path="customerForm" component={CustomerForm}/>
        </Route>
    </Router>
);

ReactDOM.render(
    router,document.getElementById('root')
);
