export function sendMsg(phone){
    return{
        type:'SEND_MSG',
        phone
    }
}

export function activation(phone,code){
    return{
        type:'ACTIVATE_ACCOUNT',
        phone,
        code
    }
}