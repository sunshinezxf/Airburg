import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './backend/redux/store';

import App from './backend/redux/app'
import * as MC from './backend/manageCustomer';
import * as MCP from './backend/manageCustomerPoint';
import {CustomerForm} from './backend/customerForm';
import {CustomerPointForm} from './backend/customerPointForm';

import './index.css';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MC.Home}/>
                <Route path="customer" component={MC.CustomerManage}/>
                <Route path="customerPoint" component={MCP.CustomerPointManage}/>
                <Route path="customerForm/:customerId" component={CustomerForm}/>
                <Route path="customerPointForm/:customerId" component={CustomerPointForm}/>
            </Route>
            </Router>
        </Provider>
);

ReactDOM.render(
    router,document.getElementById('root')
);
