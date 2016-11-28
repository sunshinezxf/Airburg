import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import  {hashHistory} from 'react-router';
import rootReducer from './../reducers/index'



const customers = [];
const customerPoints=[];

for(let i=0;i<50;i++){
    customerPoints.push({key:i,id:i});
}

const defaultState={
    customers:customers,
    customerPoints:customerPoints
};


const store=createStore(rootReducer,defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


if(module.hot) {
    module.hot.accept('./../reducers/',() => {
        const nextRootReducer = require('./../reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export const history=syncHistoryWithStore(hashHistory,store);
export default store;

