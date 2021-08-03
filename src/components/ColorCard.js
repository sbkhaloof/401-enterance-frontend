import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import UpdateForm from './UpdateForm';
import { load } from 'react-cookies';
import axios from 'axios';



class ColorCard extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            colorData:'',
            index:0,
            title:'',
            imageUrl:'',
            showUpdateForm:false,
            server:process.env.REACT_APP_SERVER,
        }
       
    }
    showUpdateColor=async(index)=>{
        await this.setState({
          index:index,
          showUpdateForm:true,
          title:this.state.colorData[index].title,
          imageUrl:this.state.colorData[index].imageUrl
        })
        }
        updateColor= async(event)=>{
          event.preventDefault();
          await this.setState({
            email:this.state.email,
            title:event.target.title.value,
            imageUrl:event.target.value,
          })
          
          let updateUrl=`${this.state.server}/updatecolor/${this.state.index}`;
          let resData=await axios.put(updateUrl);
          await this.setState({
            colorData:resData.data,
          })
        }
   deleteColor=async(index)=>{
     const paramsObj={email:this.state.email}
     await this.setState({
         index:index
     })
     
       let deleteUrl=`${this.state.server}/deletecolor/${this.state.index}`;
       let resdata=await axios.delete(deleteUrl,({params:paramsObj}));
       await this.setState({
           colorData:resdata.data,
       })
   }


    render() {
        return (
            <div>
                {this.props.colorData.map(item => {
                    return (
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Button onClick={()=>{this.showUpdateColor(index)}} variant="warning">UPDATE</Button>{' '}
                                    <Button onClick={()=>{this. deleteColor(index)}} variant="danger">DELETE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}

           <UpdateForm updateColor={this.updateColor}
           title={this.state.title} imageUrl={this.state.imageUrl}/>
            </div>
        )
    }
}

export default ColorCard;