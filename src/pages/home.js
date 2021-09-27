import { connect } from "react-redux"
import { useEffect, useState } from "react"
import fetchData from "../redux/actions/fetchData"
import fetchMovie from "../redux/actions/fetchMovie"

import Card from "../components/card"
import H1 from "../components/typography/h1"


import { MainBody, HeaderDiv, SelectDiv, Label } from "./style"

const Home = ({fetchData, data, fetchMovie, movieData})=>{

    useEffect(()=>{
        fetchData()
    }, [fetchData])
    const result = data.data ? data.data.results : []

    const [getMovie, setGetMovie] = useState({})

    const handleChange = e =>{
        if(e.target.value){
            e.target.value && fetchMovie(e.target.value)
            setGetMovie(movieData)
            console.log(e.target.value)
        }else{
            setGetMovie({})
        }
    }

    return <MainBody>
        <HeaderDiv>
            <Label>select a Star Wars movie</Label>
            <form>
                <SelectDiv 
                    onChange={(e)=>handleChange(e)}
                    padding="10px 25px"
                    background="#e9e9e9">
                    <option value=''> --- </option>
                        {result.map(item=>{
                            return (
                                <option 
                                    key={item.episode_id} 
                                    value={item.url}>
                                        {item.title}
                                </option>
                            )
                        })}
                </SelectDiv>
            </form>
        </HeaderDiv>
        <div>{ getMovie.data && <Card>
                <H1>{getMovie.data ? movieData.data.title : ''}</H1>
            </Card>}
        </div>
    </MainBody>
}

const mapStateToProps=store=>({
    data: store.fetchDataReducer,
    movieData: store.fetchMovieReducer
})
export default connect(mapStateToProps, { fetchData, fetchMovie})(Home)