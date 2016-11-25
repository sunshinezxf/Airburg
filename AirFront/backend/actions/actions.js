//客户相关的actions
export function listCustomer(start,size){
    return {
        type:'LIST_CUSTOMERS',
        start,
        size
    }
}
export function queryCustomer(phone,name){
    return{
        type:'QUERY_CUSTOMERS',
        phone,
        name
    }
}
export function addCustomer(customer){
    return{
        type:'ADD_CUSTOMER',
        customer
    }
}
export function deleteCustomer(customerId){
    return {
        type:'DELETE_CUSTOMER',
        customerId
    }
}
export function updateCustomer(customer){
    return {
        type:'UPDATE_CUSTOMER',
        customer
    }
}

//积分相关的action
export function points(phone,code){
    return{
        type:'ACTIVATE_ACCOUNT',
        phone,
        code
    }
}