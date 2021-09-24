import { connect } from "react-redux"
import { useEffect } from "react"
import fetchData from "../redux/actions/fetchData"

const Home = ({fetchData, data})=>{

    useEffect(()=>{
        fetchData()
    }, [fetchData])

    return <div>Welcome to my work space</div>
}

const mapStateToProps=store=>({
    data: store.fetchDataReducer
})
export default connect(mapStateToProps, {fetchData})(Home)