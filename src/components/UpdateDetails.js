import React, { Component } from 'react'

export default class UpdateDetails extends Component {

    handleSubmit(e) {
        e.preventDefault();      
        }


    render() { 
        return (
            <div className = "main-div">
                <div className="edit-form">
                <p>Update Details of {this.props.customer.name}</p>
                <div className="sub-form">
                
                        <form onSubmit={this.handleSubmit}>
                            
                            <label for="cid"> Customr Id : </label>
                            <input type="text" value={this.props.customer.id} name="id" id="customer.id" onChange={(e) => { this.props.editCustDetails(e, this.props.id) }}/><br/>
                            <label for="cname"> Name : </label>
                            <input type="text" value={this.props.customer.name} name="name" id="customer.name" onChange={(e) => { this.props.editCustDetails(e, this.props.id) }}/><br/>
                            <label for="phone"> Phone : </label>
                            <input type="text" value={this.props.customer.phone} name="phone" id="customer.phone" onChange={(e) => { this.props.editCustDetails(e, this.props.id) }}/><br/>
                            <label for="phone"> Date of Birth : </label>
                            <input type="text" value={this.props.customer.dob} name="dob" id="customer.dob" onChange={(e) => { this.props.editCustDetails(e, this.props.id) }}/><br/>
                            <label for="email"> Email : </label>
                            <input type="text" value={this.props.customer.email} name="email" id="customer.email" onChange={(e) => { this.props.editCustDetails(e, this.props.id) }}/><br/>
                            <label for="address"> Address : </label>
                            <input type="text" value={this.props.customer.address} name="address" id="customer.address" onChange={(e) => { this.props.editCustDetails(e, this.props.id) }}/><br/>
                            <button type="submit" onClick={(e) => { this.props.toggleUpdate(e,this.props.customer.id) }} className ="button-detail">Update Details</button>
                            </form>
                    </div>
                    </div>

                
            </div>
        )
    }
}
