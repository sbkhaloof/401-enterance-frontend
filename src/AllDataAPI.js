import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import ApiCard from './components/ApiCard'


class AllDataAPI extends Component {
constructor(props){
    super(props)
    this.state={
        apiData:[],
        showAPiData:false,
        email:''

    }
}
componentDidMount=async()=>{
    const{user}=this.props.auth0;
    await this.setState({
        email:`${user.email}`
    })
    let url=`https://ltuc-asac-api.herokuapp.com/allColorData`;
    let resdata=await axios.get(url);
    this.setState({
        apiData:resdata.data,
        showAPiData:true
    })
}


    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                <ApiCard apiData={this.state.apiData} showAPiData={this.state.showAPiData}/>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
