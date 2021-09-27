import { FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILED, FETCH_MOVIE } from "../types";


const initialState = {
    data: '',
    error: '',
    loading: false
}

const fetchMovieReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_MOVIE:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
                error: null
            }
        case FETCH_MOVIE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
                data: null
            }

        default:
            return state;
    }
}

export default fetchMovieReducer