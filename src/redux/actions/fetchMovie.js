import { FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILED, FETCH_MOVIE } from "../types";


import axios from 'axios'



const startFetching = () => ({
    type: FETCH_MOVIE
})

const fetchMovieSuccess = payload => ({
    type: FETCH_MOVIE_SUCCESS,
    payload
})

const fetchMovieFailed = payload => ({
    type: FETCH_MOVIE_FAILED,
    payload
})

const fetchMovie = url => {
    return function (dispatch) {
        dispatch(startFetching())
        axios.get(url).then(response => {
            dispatch(fetchMovieSuccess(response))
        }).catch(error => {
            dispatch(fetchMovieFailed(error))
        })
    }
}

export default fetchMovie