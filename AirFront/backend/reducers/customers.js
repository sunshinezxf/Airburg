
export function customers(state=[],action){
    switch (action.type) {
        case 'LIST_CUSTOMERS':
            console.log('list customers');
            return action.list;
        case 'CREATE_CUSTOMER':
            return [...state,action.customer];
        case 'UPDATE_CUSTOMER':
            var newState=[];
            for(var i=0;i<state.length;i++){
                if(state[i].customerId!=action.customer.customerId)
                    newState.push(state[i]);
                else{
                    newState.push(action.customer);
                }
            }
            return newState;
        case 'DELETE_CUSTOMER':
            var newState=[];
            for(var i=0;i<state.length;i++){
                if(state[i].customerId!=action.customer.customerId)
                    newState.push(state[i]);
            }
            return newState;
        default:return state;
    }
    return state;
}
