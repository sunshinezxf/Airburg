import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import {Main} from './../main'

function mapStateToProps(state){
    return {
        merchant:state.merchant,
        customers:state.customers
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}

const App=connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;
