//客户相关的actions
export function listCustomers(list){
    return {
        type:'LIST_CUSTOMERS',
        list
    }
}
export function queryCustomer(phone,name){
    return{
        type:'QUERY_CUSTOMERS',
        phone,
        name
    }
}
export function createCustomer(customer){
    return{
        type:'CREATE_CUSTOMER',
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

//客户积分相关的action
export function listCustomerPoints(customerPoints){
    return {
        type:'LIST_CUSTOMERPOINTS',
        customerPoints
    }
}
export function assignCustomerPoint(assign){
    return {
        type:'ASSIGN_POINT',
        assign
    }
}
