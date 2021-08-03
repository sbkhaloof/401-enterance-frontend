import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import ColorCard from './components/ColorCard';

class MyFavorites extends React.Component {
  constructor(props){
    super(props)
    this.state={
      colorData:[],
      showColor:false,
      email:'',
      server:process.env.REACT_APP_SERVER,
      index:0,
      title:'',
      imageUrl:'',
      showUpdateForm:false,
    }

  }

componentDidMount=async()=>{
  const {user}=this.props.auth0;
  await this.setState({
    email:`${user.email}`
  })
  let colorUrl=`${this.state.server}/color?email=${this.state.email}`;
  let resData=await axios.get(colorUrl);
  await this.setState({
    colorData:resData.data,
    showColor:true
  })
}


  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <ColorCard colorData={this.state.colorData} />
      </>
    )
  }
}

export default withAuth0(MyFavorites);

