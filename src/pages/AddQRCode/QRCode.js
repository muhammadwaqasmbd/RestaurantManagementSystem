import React, { Component } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form } from "reactstrap";
import styled from "styled-components";
import {baseUrl} from "../../helpers/baseUrl";

class QRCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }

    componentDidMount() {
        if(this.props.tableId > 0) {
            this.fetchTable();
        }
    }

    fetchTable(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching menus");
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

    handleProductAdd(id){
        console.log("Adding new product to the menu: ",id);
    }

    handleProductRemove(id){
        console.log("Removing product from the menu: ",id);
    }

    handleSubmit(event) {
        event.preventDefault();
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log(this.state.name)
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let bodyData = {
            "name":this.state.name
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
            <tr key={"row-"+this.props.menuId}>
                {this.props.menuId > 0 ?
                <td>
                    <h5 className="text-truncate font-size-14 text-dark">{this.state.name}</h5>
                    <p className="text-muted mb-0">{this.state.startTime} - {this.state.closeTime}</p>
                </td>:null}
            </tr>,
            this.props.tableId == 0 ?
            <tr key={"row-menu"}>
                <td>
                    <input type="text" name="name" onChange={this.handleFormChange} className="form-control" />
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
                                        <th style={{width: '80%'}}>Name</th>
                                        <th style={{width: '20%'}}>Actions</th>
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

export default QRCode;
