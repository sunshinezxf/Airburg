
export function customerPoints(state=[],action){
    switch (action.type) {
        case 'LIST_CUSTOMERPOINTS':
            return state;
        case 'ASSIGN_POINT':
            return state;
        default:return state;
    }
    return state;
}

