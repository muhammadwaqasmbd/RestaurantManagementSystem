import React, { Component } from "react";
import {Card, CardBody, CardTitle, Row, Col, Button, Form, Input, FormGroup} from "reactstrap";
import styled from "styled-components";
import {baseUrl} from "../../helpers/baseUrl";
import QRCodeReact from 'qrcode.react';
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";

class QRCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            qrCode : '',
            success_dlg: false,
            error_dlg: false,
            redirectToReferrer :false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }

    componentDidMount() {
        if(this.props.id > 0) {
            this.fetchQRCode();
        }else{
            const min = 1;
            const max = 1000000;
            const rand = min + Math.random() * (max - min);
            this.setState({ qrCode: Math.round(rand) })
        }
    }

    fetchQRCode(){
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
        return fetch(baseUrl+'api/qr-codes/'+this.props.id+'', {
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
                    qrCode: response.qr_code,
                })
            })
            .catch(error => console.log(error))
    }

    handleSubmit(event) {
        event.preventDefault();
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log(this.state.name)
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let bodyData = {
            "qr_code": this.state.qrCode,
            "restaurant_id" : resId
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
        var api = this.props.id > 0 ? 'api/qr-codes/'+this.props.id+'/' : 'api/qr-codes/';
        var method = this.props.id > 0 ? 'PUT' : 'POST';
        return fetch(baseUrl+api, {
            method: method,
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log("response: ",response)
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
            this.props.id == 0 ?
            <tr key={"row-menu"}>
                <td>
                    <FormGroup className="mb-4" row>
                        <Col lg="10">
                            <Input name="qrCode" type="text" value={this.state.qrCode} onChange={this.handleFormChange} className="form-control" placeholder="Enter QR Code" />
                        </Col>
                        <Col lg="2">
                        <Button
                            style={{backgroundColor: 'Green', width : '100px', textAlign:"center"}}
                            size="sm"
                            className="btn-rounded waves-effect waves-light"
                            form={"addMenuForm"}
                        >
                            Save
                        </Button>
                        </Col>
                    </FormGroup>
                </td>
             </tr>
                :
                <tr key={"row-menu"}>
                    <td>
                        <FormGroup className="mb-4" row>
                            <Col lg="10">
                                <Input name="qrCode" type="text" onChange={this.handleFormChange} value={this.state.qrCode} className="form-control" placeholder="Enter QR Code" />
                            </Col>
                            <Col lg="2">
                                <Button
                                    style={{backgroundColor: 'Green', width : '100px', textAlign:"center"}}
                                    size="sm"
                                    className="btn-rounded waves-effect waves-light"
                                    form={"addMenuForm"}
                                >
                                    Update
                                </Button>
                            </Col>
                        </FormGroup>
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

        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/qrcodes" />
        }

        return (
            <React.Fragment>
                {this.state.success_dlg ? (
                    <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ success_dlg: false, redirectToReferrer : true })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}

                {this.state.error_dlg ? (
                    <SweetAlert
                        error
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ error_dlg: false, redirectToReferrer :true })}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null
                }
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            {this.props.menuId > 0 ?
                                <span>QR-Code - {this.state.name} - Edit</span>
                                :
                                <span>QR-Code - Add</span>
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
                                        <th style={{width: '80%'}}>QR Code</th>
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
