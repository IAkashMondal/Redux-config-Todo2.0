import { AUTH_FAILURE, AUTH_LOADING, AUTH_SUCESS } from "./actionType"

const initialState={
    IsAuthLoading: false,
    token:"",
    IsAuth: false,
 }
 export const Reducer = (oldstate=initialState,action) => {
  switch(action.type){
 
    case AUTH_LOADING:
       return{...oldstate,IsAuthLoading: true}
    
    case AUTH_SUCESS:{
       return{...oldstate,token:action.payload,IsAuthLoading:false,IsAuth:true}
    }
    case AUTH_FAILURE:{
       return{...oldstate,IsAuthLoading:false,IsAuth:false,token:""}
    }
    default: return oldstate;
 }
}
  