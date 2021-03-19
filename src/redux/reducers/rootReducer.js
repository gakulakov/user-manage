import {combineReducers, compose, createStore} from "redux";
import {mainReducer} from "./mainReducer/mainReducer";



const rootReducer = combineReducers({
    main: mainReducer
})


export const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)