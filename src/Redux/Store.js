import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {Reducer as AppReducer} from "./AppReducer/Reducer"
import {Reducer as AuthReducer} from "./AuthReducer/Reducer"

const rootReducer = combineReducers({AppReducer,AuthReducer})
const logger =(store)=>(next)=>(action)=>{
    const temp = next(action);
    return temp;
}
export const store = legacy_createStore(rootReducer,applyMiddleware(logger))