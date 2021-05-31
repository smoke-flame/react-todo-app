import { combineReducers } from "redux";
import {  menuReducer } from "./menuReducer";
import{inputReducer} from "./inputReducer"
import { modalReducer } from "./modalReducer";
import { todoReducer } from "./todoReducer";
import { pageReducer } from "./pageReducer";
import { messageReducer } from "./messageReducer";



let appState = {
    menu: menuReducer,
    input:inputReducer,
    modal:modalReducer,
    todo: todoReducer,
    page: pageReducer,
    message: messageReducer
}

export const rootReducer = combineReducers(appState)