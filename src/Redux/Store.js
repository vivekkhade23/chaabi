import {legacy_createStore as createStore,applyMiddleware,compose} from "redux"
import Reducer from "./Reducer"
import thunk from"redux-thunk"
const initState={
score:0,
letters:"",
time:0,
submitCount:0,

}


export const store=createStore(Reducer,initState,
    compose(
applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)