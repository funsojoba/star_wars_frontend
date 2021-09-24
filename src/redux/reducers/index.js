import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import fetchDataReducer from "./fetchDataReducer";


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    fetchDataReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer