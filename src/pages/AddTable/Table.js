import React, { Component } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form } from "reactstrap";
import styled from "styled-components";
import {baseUrl} from "../../helpers/baseUrl";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";
var Loader = require('react-loader');

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_no : '',
            success_dlg: false,
            error_dlg: false,
            redirectToReferrer: false,
            loaded: true

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }

    componentDidMount() {
        if(this.props.tableId > 0){
            this.fetchTable()
        }
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
        return fetch(baseUrl+'api/tables/'+this.props.tableId+'', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("table response: ",response)
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
                console.log("table 2nd response: ",response)
                this.setState({
                    table_no: response.table_number
                })
            })
            .catch(error => console.log(error))
    }

    handleSubmit(event) {
        this.setState({
            loaded: false
        })
        event.preventDefault();
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let bodyData = {
            "table_number":this.state.table_no
        }
        if(isStuff == "true") {
            headers = {
                'Content-Type': 'application/json',
                'X-Requested-With': 'application/json',
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
                        this.setState({
                            loaded: true,
                            success_dlg: true,
                            dynamic_title: "Created",
                            dynamic_description: "Record has been created."
                        })
                        return response;
                    } else {
                        this.setState({
                            loaded: true,
                            error_dlg: true,
                            dynamic_title: "Error",
                            dynamic_description: "Error in creation."
                        })
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }
                },
                error => {
                    this.setState({
                        loaded: true,
                        error_dlg: true,
                        dynamic_title: "Error",
                        dynamic_description: "Error in deletion."
                    })
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
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/tables" />
        }

        console.log(this.props.menuId);
        let allItemRows = [];
        const perItemRows = this.renderItems();
        console.log(perItemRows);
        allItemRows = allItemRows.concat(perItemRows);

        return (
            <React.Fragment>
                {this.state.success_dlg ? (
                    <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ success_dlg: false, redirectToReferrer: true })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}

                {this.state.error_dlg ? (
                    <SweetAlert
                        error
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ error_dlg: false, redirectToReferrer: true })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null
                }
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
                            <Loader loaded={this.state.loaded}>
                            <table className="table table-centered table-borderless table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width: '70%'}}>Table #</th>
                                        <th style={{width: '30%'}}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="itemsBody">
                                    {allItemRows}
                                </tbody>
                                
                            </table>
                            </Loader>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default Table;
