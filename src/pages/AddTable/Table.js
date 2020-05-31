import React, { Component } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form } from "reactstrap";
import styled from "styled-components";
import {baseUrl} from "../../helpers/baseUrl";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_no : '',
            takeaway: '',
            directpayment: ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }

    componentDidMount() {
        this.fetchTable()
    }

    fetchTable(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching table");
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer
            }
        }
        return fetch(baseUrl+'api/menus/'+this.props.menuId+'', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("menu response: ",response)
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }
                },
                error => {
                    console.log(error)
                })
            .then(response => response.json())
            .then(response => {
                // If response was successful, set the token in local storage
                console.log("response: ",response)
                this.setState({
                    name: response.name,
                    description:  response.description,
                    startTime:  response.start_time,
                    closeTime:  response.end_time,
                    menuProducts : response.products
                })
            })
            .catch(error => console.log(error))
    }

    handleSubmit(event) {
        event.preventDefault();
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let bodyData = {
            "table_number":this.state.table_no,
            "takeaway": this.state.takeaway == "Yes" ? true : false,
            "direct_payment": this.state.direct_payment  == "No" ? true : false,
        }
        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer
            }
        }
        var api = this.props.tableId > 0 ? 'api/tables/'+this.props.tableId+'/' : 'api/tables/';
        var method = this.props.tableId > 0 ? 'PUT' : 'POST';
        return fetch(baseUrl+api, {
            method: method,
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log("register response: ",response)
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }
                },
                error => {
                    console.log(error)
                })
            .catch(error => console.log(error))
      }

      handleFormChange(event) {
        const value = event.target.value;
        this.setState({
          [event.target.name]: value
        });
      }
    renderItems() {
        const menuProductRow = [
            this.props.tableId == 0 ?
            <tr key={"row-menu"}>
                <td>
                    <input type="text" name="table_no" onChange={this.handleFormChange} className="form-control" />
                </td>
                <td>
                    <select name="takeaway" onChange={this.handleFormChange} className="form-control">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </td>
                <td>
                    <select name="directpayment" onChange={this.handleFormChange} className="form-control">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </td>
                <td>
                <Button
                        style={{backgroundColor: 'Green', width : '100px'}}
                        size="sm" 
                        className="btn-rounded waves-effect waves-light"
                        form={"addMenuForm"}
                    >
                    Save
                    </Button>
                </td>
             </tr>
                :
                <tr key={"row-menu"}>
                    <td>
                        <input type="text" name="table_no" value={this.state.table_no} onChange={this.handleFormChange} className="form-control" />
                    </td>
                    <td>
                        <select name="takeaway" onChange={this.handleFormChange} value={this.state.takeaway} className="form-control">
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </td>
                    <td>
                        <select name="directpayment" onChange={this.handleFormChange} value={this.state.directpayment} className="form-control">
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </td>
                    <td>
                        <Button
                            style={{backgroundColor: 'Green', width : '100px'}}
                            size="sm"
                            className="btn-rounded waves-effect waves-light"
                            form={"addMenuForm"}
                        >
                            Update
                        </Button>
                    </td>
                </tr>
        ];
        
        return menuProductRow;    
    }

    render() {
        console.log(this.props.menuId);
        let allItemRows = [];
        const perItemRows = this.renderItems();
        console.log(perItemRows);
        allItemRows = allItemRows.concat(perItemRows);

        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            {this.props.menuId > 0 ?
                                <span>Table - {this.state.name} - Edit</span>
                                :
                                <span>Table - Add</span>
                            }

                        </CardTitle>
                        <Form
                                className="repeater"
                                encType="multipart/form-data"
                                onSubmit={this.handleSubmit}
                                id="addMenuForm"
                            ></Form>
                        <div className="table-responsive">
                            <table className="table table-centered table-borderless table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width: '40%'}}>Table #</th>
                                        <th style={{width: '15%'}}>Takeaway</th>
                                        <th style={{width: '15%'}}>Direct Payment</th>
                                        <th style={{width: '30%'}}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="itemsBody">
                                    {allItemRows}
                                </tbody>
                                
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default Table;
