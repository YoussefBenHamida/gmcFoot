import {applyMiddleware, createStore} from "redux"
import {thunk} from "redux-thunk"
import { Reducer } from "./Reducer"
import { composeWithDevTools } from '@redux-devtools/extension';

const middleware=[thunk]
export  const store=createStore(Reducer, composeWithDevTools(
    applyMiddleware(...middleware)))