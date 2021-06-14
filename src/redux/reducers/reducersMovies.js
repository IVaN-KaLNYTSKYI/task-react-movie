import {GET_MOVIES, GET_MOVIES_ID, GET_MOVIES_SEARCH, GET_VIDEO} from "../actionTypes";

const initialState = {
    movies: {},
    movie:{},
    video:{}
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...state, movies: action.payload
            }
        }
        case GET_MOVIES_ID: {
            return {
                ...state, movie: action.payload
            }
        }
        case GET_VIDEO: {
            return {
                ...state, video: action.payload
            }
        }
        case GET_MOVIES_SEARCH: {
            return {
                ...state, movies: action.payload
            }
        }
        default:
            return state
    }
}