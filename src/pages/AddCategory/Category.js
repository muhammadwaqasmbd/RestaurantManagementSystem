import React, { Component } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form } from "reactstrap";
import styled from "styled-components";
import {baseUrl} from "../../helpers/baseUrl";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            description : '',
            priority : '',
            success_dlg: false,
            error_dlg: false,
            redirectToReferrer: false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }

    componentDidMount() {
        if(this.props.catId > 0){
            this.fetchCategory()
        }
    }

    fetchCategory(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching category");
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
        return fetch(baseUrl+'api/categories/'+this.props.catId+'', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("category response: ",response)
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
                    name: response.name,
                    description: response.description,
                    priority: response.priority
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
            "name":this.state.name,
            "description":this.state.description,
            "priority":this.state.priority
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
        var api = this.props.catId > 0 ? 'api/categories/'+this.props.catId+'/' : 'api/categories/';
        var method = this.props.catId > 0 ? 'PUT' : 'POST';
        return fetch(baseUrl+api, {
            method: method,
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log("category response: ",response)
                    if (response.ok) {
                        this.setState({
                            success_dlg: true,
                            dynamic_title: "Created",
                            dynamic_description: "Record has been created."
                        })
                        return response;
                    } else {
                        this.setState({
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
                        error_dlg: true,
                        dynamic_title: "Error",
                        dynamic_description: "Error in creation."
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
            this.props.catId == 0 ?
            <tr key={"row-menu"}>
                <td>
                    <input type="text" name="name" onChange={this.handleFormChange} className="form-control" />
                </td>
                <td>
                    <input type="text" name="description" onChange={this.handleFormChange} className="form-control" />
                </td>
                <td>
                    <select name="priority" onChange={this.handleFormChange} className="form-control">
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
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
                        <input type="text" name="name" value={this.state.name} onChange={this.handleFormChange} className="form-control" />
                    </td>
                    <td>
                        <input type="text" name="description" value={this.state.description}  onChange={this.handleFormChange} className="form-control" />
                    </td>
                    <td>
                        <select name="priority" onChange={this.handleFormChange} value={this.state.priority} className="form-control">
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
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
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/categories" />
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
                                <span>Category - {this.state.name} - Edit</span>
                                :
                                <span>Category - Add</span>
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
                                        <th style={{width: '25%'}}>Name</th>
                                        <th style={{width: '25%'}}>Description</th>
                                        <th style={{width: '25%'}}>Priority</th>
                                        <th style={{width: '25%'}}>Actions</th>
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

export default Category;
