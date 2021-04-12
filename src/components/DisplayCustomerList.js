import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';

export default class DisplayCustomerList extends Component {
    render() {
        return (
            <div className="display-cust-main"> 
            <div className="customerList">
                <table >
                    <td>
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
                    </td>
                </table>
            </div>
            </div>
        )
    }
}
