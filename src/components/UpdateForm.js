import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'

class UpdateForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.UpdateForm}>
                    <input type="text" name="title" defaultValue={this.props.title}/>
                    <input type="text" name=".imageUrl" defaultValue={this.props.imageUrl}/>
                    <button type="submit"/>

                </form>
            </div>
        )
    }
}

export default UpdateForm;