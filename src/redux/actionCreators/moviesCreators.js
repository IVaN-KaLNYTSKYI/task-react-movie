import {GET_MOVIES, GET_MOVIES_ID, GET_MOVIES_SEARCH, GET_VIDEO} from "../actionTypes";
import {getMovie, getMovieId, getMovieSearch, getVideo} from "../../services/api-movies";



export const fetchMovies = (page) => async (dispatch) => {
    try {
        const res = await getMovie(page).then()
        const data= await res.data
        console.log(data)
        dispatch(getMoviesCreators(data))
    } catch (e) {
        console.log(e)
    }
}

export const fetchMoviesId = (id) => async (dispatch) => {
    try {
        const res = await getMovieId(id).then()
        const data= await res.data
        dispatch(getMoviesIdCreators(data))
    } catch (e) {
        console.log(e)
    }
}
export const fetchVideo = (id) => async (dispatch) => {
    try {
        const res = await getVideo(id).then()
        const data= await res.data
        dispatch(getVideoCreators(data))
    } catch (e) {
        console.log(e)
    }
}

export const fetchMovieSearch = (page,text) => async (dispatch) => {
    try {
        const res = await getMovieSearch(page,text).then()
        const data= await res.data
        dispatch(getMoviesSearchCreators(data))
    } catch (e) {
        console.log(e)
    }
}

export const getMoviesCreators = (payload) => ({type: GET_MOVIES, payload})
export const getMoviesIdCreators = (payload) => ({type: GET_MOVIES_ID, payload})
export const getVideoCreators = (payload) => ({type: GET_VIDEO, payload})
export const getMoviesSearchCreators = (payload) => ({type: GET_MOVIES_SEARCH, payload})