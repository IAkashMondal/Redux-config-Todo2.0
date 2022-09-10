import { AUTH_FAILURE, AUTH_LOADING, AUTH_SUCESS } from "./actionType"

export const AUTH_LOGIN_LOADING=()=>{
    return{
        type:AUTH_LOADING,

    }
}
export const AUTH_LOGIN_SUCESS=(payload)=>{
    return({
        type:AUTH_SUCESS,
        payload,
        
    })
}
export const AUTH_LOGIN_FAILURE=()=>{
    return({
        type:AUTH_FAILURE,
        
    })
}