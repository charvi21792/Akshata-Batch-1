import React, { Component } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import UpdateDetails from './UpdateDetails'

export default class DisplayCust extends Component {
    constructor(props) {
        super(props);

        this.renderCustomer = this.renderCustomer.bind(this);
        this.renderEdit = this.renderEdit.bind(this);

    }

    renderCustomer() {
        return (
            <div className="customerList">
                <table >
                    <tbody>
                        <tr>
                            {this.props.customer.name}
                            <span className="icons">
                                <Link to={"/details/" + this.props.customer.id + "/" + this.props.customer.name + "/" + this.props.customer.phone + "/" + this.props.customer.dob + "/" + this.props.customer.email + "/" + this.props.customer.address} >
                                    <VisibilityIcon />
                                </Link>
                                <EditIcon onClick={(e) => { this.props.toggleUpdate(e, this.props.id) }} />
                                <DeleteIcon onClick={() => { this.props.deleteCustomer(this.props.id) }} />
                            </span>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }

    
    renderEdit() {
        return (
            <div>
            <h2>Edit Customer Details</h2>
            <UpdateDetails
            id={this.props.id}
            customer={this.props.customer}
            editCustDetails={this.props.editCustDetails}
            toggleUpdate={this.props.toggleUpdate}
            />
            </div>
        )

    }

    render() {
        console.log("isUpdate value in displaycust :" + this.props.isUpdate)


        return (

            <div >
                <section>
                    {
                        this.props.isUpdate ? this.renderEdit() : this.renderCustomer()
                    }
                </section>
            </div>
        )
    }
}

