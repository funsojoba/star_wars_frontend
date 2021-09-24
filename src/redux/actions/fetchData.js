import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../types'

import axios from 'axios'
import BASEURL from '../baseUrl'


const startFetching = ()=>({
    type:FETCH_DATA
})

const fetchDataSuccess = payload =>({
    type: FETCH_DATA_SUCCESS,
    payload
})

const fetchDataFailed = payload =>({
    type: FETCH_DATA_FAILED,
    payload
})

const fetchData = payload =>{
    return function(dispatch){
        dispatch(startFetching())
        axios.get(BASEURL).then(response =>{
            dispatch(fetchDataSuccess(response.data))
            console.log(response.data)
        }).catch(error =>{
            dispatch(fetchDataFailed(error))
            console.log(error)
        })
    }
}

export default fetchData