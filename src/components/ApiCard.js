import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import UpdateForm from './UpdateForm';
import { load } from 'react-cookies';
import axios from 'axios';



class ApiCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.api.map(item => {
                    return (
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Button >add to fav</Button>{' '}
                                   
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}

         
            </div>
        )
    }
}

export default ApiCard;