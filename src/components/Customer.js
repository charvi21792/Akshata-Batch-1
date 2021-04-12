import React, { Component } from 'react'
import UpdateDetails from './UpdateDetails';
import DisplayCustomerList from './DisplayCustomerList';
import CData from './CustomerData';


export default class Customer extends Component {

    constructor() {
        super();

        this.state = {
            CustomerData: [...CData],
            editedList: [],
            isUpdate: false,
            newId: "",
            isDelete: false
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.editCustDetails = this.editCustDetails.bind(this);
        this.toggleUpdate = this.toggleUpdate.bind(this);
    }
    // customerList = [...CustomerData]

    // Delete a record
    deleteCustomer(id) {
        // alert("Do you want to delete ?")
        console.log("delete called")
        const newCustList = this.state.CustomerData.filter((arrElem, index) => {
            // console.log("index value in delete function: "+ index +  "and " + id )
            return index !== id
        })
        

        this.setState({
            CustomerData: [...newCustList]
        })
    }

    toggleUpdate(e, cid) {
        const { isUpdate } = this.state;
        this.setState({
            isUpdate: !isUpdate,
            newId: cid

        })

    }

// Edit record
    editCustDetails(e, custId) {
        console.log("edit item called")

        const fieldName = e.target.name;

        const editedList = this.state.CustomerData.map((customer, index) => {
            
            if (index === custId) {
                switch (fieldName) {
                    case "id":
                        { customer.id = e.target.value }
                        break;
                    case "name":
                        { customer.name = e.target.value }
                        break;
                    case "phone":
                        { customer.phone = e.target.value }
                        break;
                    case "dob":
                        { customer.dob = e.target.value }
                        break;
                    case "email":
                        { customer.email = e.target.value }
                        break;
                    case "address":
                        { customer.address = e.target.value }
                        break;

                }
                return customer
            }
            else {
                return customer
            }


        })

        this.setState({

            CustomerData: [...editedList]

        })

    }



    render() {
        
        let { CustomerData,newId } = this.state;

        if (this.state.isUpdate) {
            // console.log("newId Value" + newId)
            return (
                <UpdateDetails
                    id={newId}
                    customer={CustomerData[newId]}
                    editCustDetails={this.editCustDetails}
                    toggleUpdate={this.toggleUpdate}
                />
            )
        }
        else {
           return (

                CustomerData.map((val, index) => (
                    <DisplayCustomerList
                        key={CustomerData.id}
                        id={index}
                        customer={val}
                        deleteCustomer={this.deleteCustomer}
                        editCustDetails={this.editCustDetails}
                        toggleUpdate={this.toggleUpdate}
                        isUpdate={this.state.isUpdate}
                    />
                ))
            )
        }

    }
}
