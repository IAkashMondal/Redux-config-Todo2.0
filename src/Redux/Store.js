import {combineReducers, legacy_createStore} from "redux"
import {Reducer as AppReducer} from "./AppReducer/Reducer"
import {Reducer as AuthReducer} from "./AuthReducer/Reducer"

const rootReducer = combineReducers({AppReducer,AuthReducer})
export const store = legacy_createStore(rootReducer)