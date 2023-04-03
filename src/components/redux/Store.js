import { createStore } from "redux";
import { combineReducers } from "redux";
import Reducers from "./redux1/reducer";
import {persistReducer , persistStore} from 'redux-persist'
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key : 'persist-store',
    storage
}

const persistedReducer = persistReducer(persistConfig , Reducers)
   
 const store = createStore(persistedReducer);
export const persistor= persistStore(store)
export default store;