import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ViewDetails extends Component {
   

    handleSubmit(e){
        e.preventDefault(); 
        // this.props.isUpdate = !this.props.isUpdate
    }

  render() {
        return (
            <div className = "main-div">
                <div className = "center-div">
                    <div className = "form-detail">
                        <h3> Details of {this.props.match.params.name}</h3>
                        <form onSubmit = {this.handleSubmit}>
                            <label > Customr Id :</label>
                            <label>{this.props.match.params.id}</label><br/>
                            <label > Name :</label>
                            <label>{this.props.match.params.name}</label> <br/>
                            <label > Phone :</label>
                            <label>{this.props.match.params.phone}</label><br/>
                            <label > Date of Birth :</label>
                            <label>{this.props.match.params.dob}</label><br/>
                            <label > Email :</label>
                            <label>{this.props.match.params.email}</label><br/>
                            <label > Address :</label>
                            <label>{this.props.match.params.address}</label><br/>

                        </form>
                    </div>
                </div>
                    <Link to ='/'>
                        <button type = "submit" className ="button-detail">Go Back</button>
                    </Link>
            </div>
            
        )
    }
}
