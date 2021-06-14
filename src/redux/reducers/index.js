import {combineReducers} from "redux";
import {moviesReducer} from "./reducersMovies";

export * from './reducersMovies'
export const rootReducer=combineReducers({
    movies:moviesReducer
})
