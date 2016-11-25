import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd-mobile';
import Goods from './client/goods'
import HomePage  from './client/homepage'
import Order from './client/order'
import Address from './client/address'

import './index.css';

function App() {
  return (
    <div>
        <HomePage/>
    </div>
  );
}

const router = (
        <Router history={hashHistory}  >
            <Route>
                <Route path="/" component={HomePage} ignoreScrollBehavior={true} />
                <Route path="/goods" component={Goods} onEnter={() => window.scrollTo(0, 0)}/>
                <Route path="/address" component={Address} onEnter={() => window.scrollTo(0, 0)}/>
                <Route path="/order/:goodsId/:amount" component={Order} onEnter={() => window.scrollTo(0, 0)}/>
            </Route>

        </Router>
);

ReactDOM.render(router, document.getElementById('root'));
