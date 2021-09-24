import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "../types"

const initialState = {
    data: '',
    error: '',
    loading: false
}

const fetchDataReducer = (state=initialState, action)=>{
    const {type, payload} = action;

    switch (type) {
        case FETCH_DATA:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload,
                error: null
            }
        case FETCH_DATA_FAILED:
            return{
                ...state,
                loading: false,
                error: payload,
                data: null
            }
    
        default:
            return state;
    }
}

export default fetchDataReducer