import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from './slices/home.slice'
import userReducer from './slices/user.slice'
import {api} from "./services/api";

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    counter: counterReducer,
    user: userReducer,
})
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});