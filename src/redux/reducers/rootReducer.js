import {combineReducers } from "redux";
import {mainReducer} from "./mainReducer/mainReducer";


export const rootReducer = combineReducers({
    main: mainReducer
})